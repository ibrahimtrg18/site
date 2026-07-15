"use client";

import { Fragment, useCallback, useEffect, useState } from "react";

import {
  Button,
  Card,
  Heading,
  IconButton,
  Spinner,
  Text,
} from "@/components/ui";

type AssetFolder = { name: string };

type AssetFile = {
  name: string;
  url: string;
  size: number;
  isImage: boolean;
};

type Listing = {
  path: string;
  folders: AssetFolder[];
  files: AssetFile[];
};

const formatSize = (bytes: number) => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
};

const joinPath = (...segments: string[]) => segments.filter(Boolean).join("/");

export default function StudioAssetsPage() {
  const [currentPath, setCurrentPath] = useState("");
  const [listing, setListing] = useState<Listing | null>(null);
  const [uploading, setUploading] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  const load = useCallback(async (path: string) => {
    const res = await fetch(
      `/api/studio/assets/browse?path=${encodeURIComponent(path)}`
    );
    const data = await res.json();

    if (!res.ok) {
      setFeedback({ kind: "error", text: data.error ?? "Failed to browse" });
      return;
    }

    setListing(data);
    setCurrentPath(path);
  }, []);

  useEffect(() => {
    load("");
  }, [load]);

  const handleUpload = async (files: FileList | null) => {
    if (!files?.length) return;

    setUploading(true);
    setFeedback(null);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("path", currentPath);

        const res = await fetch("/api/studio/assets", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Upload failed");
      }
      await load(currentPath);
    } catch (error) {
      setFeedback({
        kind: "error",
        text: error instanceof Error ? error.message : "Upload failed",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleNewFolder = async () => {
    const name = window.prompt("New folder name:");
    if (!name?.trim()) return;

    const res = await fetch("/api/studio/assets/browse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: joinPath(currentPath, name.trim()) }),
    });
    const data = await res.json();

    if (!res.ok) {
      setFeedback({ kind: "error", text: data.error ?? "Failed" });
      return;
    }

    load(currentPath);
  };

  const handleRename = async (name: string) => {
    const next = window.prompt("Rename to:", name);
    if (!next?.trim() || next === name) return;

    const res = await fetch("/api/studio/assets/browse", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: joinPath(currentPath, name),
        to: joinPath(currentPath, next.trim()),
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      setFeedback({ kind: "error", text: data.error ?? "Rename failed" });
      return;
    }

    load(currentPath);
  };

  const handleDelete = async (name: string, isFolder: boolean) => {
    const target = joinPath(currentPath, name);
    const confirmed = window.confirm(
      isFolder
        ? `Delete folder "${target}" and everything inside it?`
        : `Delete "${target}"?`
    );
    if (!confirmed) return;

    const res = await fetch(
      `/api/studio/assets/browse?path=${encodeURIComponent(target)}`,
      { method: "DELETE" }
    );
    const data = await res.json();

    if (!res.ok) {
      setFeedback({ kind: "error", text: data.error ?? "Delete failed" });
      return;
    }

    load(currentPath);
  };

  const handleCopyUrl = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setFeedback({
      kind: "success",
      text: `Copied ${url} — paste it into any content or image dialog.`,
    });
  };

  if (!listing) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  const crumbs = currentPath ? currentPath.split("/") : [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Heading as="h2" size="lg">
          Assets
        </Heading>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleNewFolder}>
            <i className="fa-solid fa-folder-plus" /> New folder
          </Button>
          <label>
            <Button asChild size="sm" className="cursor-pointer">
              <span>
                {uploading ? (
                  <Spinner size="sm" />
                ) : (
                  <>
                    <i className="fa-solid fa-upload" /> Upload
                  </>
                )}
              </span>
            </Button>
            <input
              type="file"
              multiple
              className="hidden"
              disabled={uploading}
              onChange={(event) => {
                handleUpload(event.target.files);
                event.target.value = "";
              }}
            />
          </label>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-1 text-sm">
        <button className="font-mono hover:underline" onClick={() => load("")}>
          assets
        </button>
        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            <span className="text-neutral-400">/</span>
            <button
              className="font-mono hover:underline"
              onClick={() => load(crumbs.slice(0, index + 1).join("/"))}
            >
              {crumb}
            </button>
          </Fragment>
        ))}
      </nav>

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

      {listing.folders.length === 0 && listing.files.length === 0 && (
        <Text className="py-10 text-center text-neutral-500 dark:text-neutral-400">
          Empty folder — upload files or create a folder.
        </Text>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {listing.folders.map((folder) => (
          <Card key={folder.name} className="group gap-2 p-3">
            <button
              className="flex flex-col items-center gap-2 py-4"
              aria-label={`Open folder ${folder.name}`}
              onClick={() => load(joinPath(currentPath, folder.name))}
            >
              <i className="fa-solid fa-folder text-4xl text-amber-400" />
              <span className="w-full truncate text-center text-sm">
                {folder.name}
              </span>
            </button>
            <div className="flex justify-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <IconButton
                size="sm"
                aria-label="Rename folder"
                onClick={() => handleRename(folder.name)}
              >
                <i className="fa-solid fa-pen text-xs" />
              </IconButton>
              <IconButton
                size="sm"
                aria-label="Delete folder"
                className="text-red-600 dark:text-red-400"
                onClick={() => handleDelete(folder.name, true)}
              >
                <i className="fa-solid fa-trash text-xs" />
              </IconButton>
            </div>
          </Card>
        ))}

        {listing.files.map((file) => (
          <Card key={file.name} className="group gap-2 p-3">
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900">
              {file.isImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={file.url}
                  alt={file.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <i className="fa-solid fa-file text-3xl text-neutral-400" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs" title={file.name}>
                {file.name}
              </p>
              <p className="text-xs text-neutral-400">
                {formatSize(file.size)}
              </p>
            </div>
            <div className="flex justify-between gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 flex-1 px-1 text-xs"
                onClick={() => handleCopyUrl(file.url)}
              >
                <i className="fa-solid fa-link" /> Copy URL
              </Button>
              <div className="flex opacity-0 transition-opacity group-hover:opacity-100">
                <IconButton
                  size="sm"
                  className="h-7 w-7"
                  aria-label="Rename file"
                  onClick={() => handleRename(file.name)}
                >
                  <i className="fa-solid fa-pen text-xs" />
                </IconButton>
                <IconButton
                  size="sm"
                  className="h-7 w-7 text-red-600 dark:text-red-400"
                  aria-label="Delete file"
                  onClick={() => handleDelete(file.name, false)}
                >
                  <i className="fa-solid fa-trash text-xs" />
                </IconButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
