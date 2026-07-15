"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Button,
  Card,
  Heading,
  IconButton,
  Spinner,
  Text,
} from "@/components/ui";
import { slugify } from "@/studio/slug";

const MarkdownEditor = dynamic(() => import("./markdown-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center py-10">
      <Spinner />
    </div>
  ),
});

type StudioImage = { url: string };

type EditorState = {
  title: string;
  description: string;
  tags: string;
  date?: string;
  slug: string;
  images: StudioImage[];
  body: string;
  raw: boolean;
};

const emptyState = (type: string): EditorState => ({
  title: "",
  description: "",
  tags: "",
  ...(type === "blog" && { date: new Date().toISOString().slice(0, 10) }),
  slug: "",
  images: [],
  body: "",
  raw: false,
});

const inputClassName =
  "h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 text-sm dark:border-neutral-800";

function EditorInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "project";
  const existingSlug = searchParams.get("slug");

  const [state, setState] = useState<EditorState | null>(
    existingSlug ? null : emptyState(type)
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(!existingSlug);
  const [slugTouched, setSlugTouched] = useState(Boolean(existingSlug));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (!existingSlug) return;

    fetch(`/api/studio/content/${type}/${existingSlug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.entry) {
          setState(data.entry as EditorState);
          setPreviewUrl(data.previewUrl ?? null);
        } else {
          setFeedback({ kind: "error", text: data.error ?? "Failed to load" });
          setState(emptyState(type));
        }
      });
  }, [type, existingSlug]);

  const update = (patch: Partial<EditorState>) =>
    setState((current) => (current ? { ...current, ...patch } : current));

  const handleTitleChange = (title: string) => {
    update({ title });
    if (isNew && !slugTouched) {
      update({ slug: slugify(title) });
    }
  };

  const uploadAsset = useCallback(
    async (file: File): Promise<string> => {
      if (!state?.slug) {
        throw new Error("Set a title/slug before uploading assets");
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", type);
      formData.append("slug", state.slug);

      const res = await fetch("/api/studio/assets", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? "Upload failed");

      return data.url as string;
    },
    [state?.slug, type]
  );

  const handleSliderImagesUpload = async (files: FileList | null) => {
    if (!files?.length || !state) return;

    setUploading(true);
    setFeedback(null);

    try {
      const urls: string[] = [];
      for (const file of Array.from(files)) {
        urls.push(await uploadAsset(file));
      }
      update({
        images: [...state.images, ...urls.map((url) => ({ url }))],
      });
    } catch (error) {
      setFeedback({
        kind: "error",
        text: error instanceof Error ? error.message : "Upload failed",
      });
    } finally {
      setUploading(false);
    }
  };

  const moveImage = (index: number, delta: number) => {
    if (!state) return;
    const images = [...state.images];
    const target = index + delta;
    if (target < 0 || target >= images.length) return;
    [images[index], images[target]] = [images[target], images[index]];
    update({ images });
  };

  const handleSave = async (overwrite: boolean) => {
    if (!state) return;

    setSaving(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/studio/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entry: { ...state, type },
          overwrite: overwrite || !isNew,
        }),
      });
      const data = await res.json();

      if (res.status === 409) {
        const confirmed = window.confirm(
          `${data.error}. Overwrite the existing file?`
        );
        if (confirmed) await handleSave(true);
        return;
      }

      if (!res.ok) {
        setFeedback({ kind: "error", text: data.error ?? "Save failed" });
        return;
      }

      setIsNew(false);
      setSlugTouched(true);
      setPreviewUrl(data.previewUrl ?? null);
      setFeedback({
        kind: "success",
        text: `Saved ${data.path}. Preview it, then publish from the dashboard.`,
      });
      router.replace(`/studio/editor?type=${type}&slug=${state.slug}`);
    } finally {
      setSaving(false);
    }
  };

  if (!state) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Heading as="h2" size="lg">
          {isNew ? `New ${type}` : `Edit ${state.slug}`}
        </Heading>
        <div className="flex items-center gap-2">
          {!isNew && previewUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={previewUrl} target="_blank" rel="noreferrer">
                Preview
              </a>
            </Button>
          )}
          <Button asChild variant="ghost" size="sm">
            <Link href="/studio">Back</Link>
          </Button>
          <Button size="sm" disabled={saving} onClick={() => handleSave(false)}>
            {saving ? <Spinner size="sm" /> : "Save"}
          </Button>
        </div>
      </div>

      {feedback && (
        <div
          className={
            feedback.kind === "success"
              ? "rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200"
              : "rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200"
          }
        >
          {feedback.text}
        </div>
      )}

      {state.raw ? (
        <Card className="gap-3 px-4 py-4">
          <Text className="text-sm text-amber-700 dark:text-amber-400">
            This file has custom JSX or exports the form can&apos;t represent,
            so you&apos;re editing the raw file source.
          </Text>
          <textarea
            className="min-h-[60vh] w-full rounded-md border border-neutral-200 bg-transparent p-3 font-mono text-sm dark:border-neutral-800"
            value={state.body}
            onChange={(event) => update({ body: event.target.value })}
          />
        </Card>
      ) : (
        <>
          <Card className="gap-4 px-4 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm">
                <span className="font-medium">Title</span>
                <input
                  className={inputClassName}
                  value={state.title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  placeholder="My Awesome Project"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="font-medium">Slug</span>
                <input
                  className={inputClassName + " font-mono"}
                  value={state.slug}
                  disabled={!isNew}
                  onChange={(event) => {
                    setSlugTouched(true);
                    update({ slug: slugify(event.target.value) });
                  }}
                  placeholder="my-awesome-project"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm sm:col-span-2">
                <span className="font-medium">Description</span>
                <input
                  className={inputClassName}
                  value={state.description}
                  onChange={(event) =>
                    update({ description: event.target.value })
                  }
                  placeholder="Short description shown in lists and metadata"
                />
              </label>
              <label
                className={
                  "flex flex-col gap-1 text-sm" +
                  (type === "blog" ? "" : " sm:col-span-2")
                }
              >
                <span className="font-medium">Tags</span>
                <input
                  className={inputClassName}
                  value={state.tags}
                  onChange={(event) => update({ tags: event.target.value })}
                  placeholder="React, TypeScript, Tailwind"
                />
              </label>
              {type === "blog" && (
                <label className="flex flex-col gap-1 text-sm">
                  <span className="font-medium">Date</span>
                  <input
                    type="date"
                    className={inputClassName}
                    value={state.date ?? ""}
                    onChange={(event) => update({ date: event.target.value })}
                  />
                </label>
              )}
            </div>
          </Card>

          {type === "project" && (
            <Card className="gap-3 px-4 py-4">
              <div className="flex items-center justify-between">
                <Heading as="h3" size="sm">
                  Slider images
                </Heading>
                <label className="cursor-pointer text-sm font-medium hover:underline">
                  {uploading ? <Spinner size="sm" /> : "+ Upload images"}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    disabled={uploading || !state.slug}
                    onChange={(event) => {
                      handleSliderImagesUpload(event.target.files);
                      event.target.value = "";
                    }}
                  />
                </label>
              </div>

              {!state.slug && (
                <Text className="text-xs text-neutral-400">
                  Set a title first — uploads are stored under the slug folder.
                </Text>
              )}

              {state.images.length > 0 && (
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {state.images.map((image, index) => (
                    <li
                      key={image.url}
                      className="flex flex-col gap-1 rounded-md border border-neutral-200 p-2 dark:border-neutral-800"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.url}
                        alt=""
                        className="aspect-video w-full rounded object-cover"
                      />
                      <span className="truncate text-xs text-neutral-400">
                        {image.url.split("/").pop()}
                      </span>
                      <div className="flex justify-between">
                        <div className="flex">
                          <IconButton
                            size="sm"
                            aria-label="Move left"
                            onClick={() => moveImage(index, -1)}
                          >
                            <i className="fa-solid fa-arrow-left text-xs" />
                          </IconButton>
                          <IconButton
                            size="sm"
                            aria-label="Move right"
                            onClick={() => moveImage(index, 1)}
                          >
                            <i className="fa-solid fa-arrow-right text-xs" />
                          </IconButton>
                        </div>
                        <IconButton
                          size="sm"
                          aria-label="Remove"
                          className="text-red-600 dark:text-red-400"
                          onClick={() =>
                            update({
                              images: state.images.filter(
                                (_, i) => i !== index
                              ),
                            })
                          }
                        >
                          <i className="fa-solid fa-trash text-xs" />
                        </IconButton>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          )}

          <Card className="overflow-hidden px-0 py-0">
            <MarkdownEditor
              key={existingSlug ?? "new"}
              markdown={state.body}
              onChange={(body) => update({ body })}
              imageUploadHandler={uploadAsset}
            />
          </Card>
        </>
      )}
    </div>
  );
}

export default function StudioEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-20">
          <Spinner />
        </div>
      }
    >
      <EditorInner />
    </Suspense>
  );
}
