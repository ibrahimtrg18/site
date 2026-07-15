"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { Button, Card, Heading, Spinner, Text } from "@/components/ui";

type EntrySummary = {
  type: string;
  typeLabel: string;
  slug: string;
  title: string;
  description: string;
  previewUrl: string;
};

type GitFile = { path: string; status: string; publishable: boolean };

type GitStatus = {
  branch: string;
  ahead: number;
  behind: number;
  files: GitFile[];
};

type ContentTypeSummary = { type: string; label: string };

export default function StudioDashboardPage() {
  const [types, setTypes] = useState<ContentTypeSummary[]>([]);
  const [entries, setEntries] = useState<EntrySummary[] | null>(null);
  const [gitStatus, setGitStatus] = useState<GitStatus | null>(null);
  const [message, setMessage] = useState("content: update from studio");
  const [publishing, setPublishing] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  const load = useCallback(async () => {
    const [contentRes, statusRes] = await Promise.all([
      fetch("/api/studio/content"),
      fetch("/api/studio/publish"),
    ]);

    const content = await contentRes.json();
    const status = await statusRes.json();

    setTypes(content.types ?? []);
    setEntries(content.entries ?? []);
    setGitStatus(statusRes.ok ? status : null);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (entry: EntrySummary) => {
    const confirmed = window.confirm(
      `Delete "${entry.slug}.mdx" and its asset folder? This only changes local files until you publish.`
    );
    if (!confirmed) return;

    const res = await fetch(`/api/studio/content/${entry.type}/${entry.slug}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      setFeedback({ kind: "error", text: data.error ?? "Delete failed" });
      return;
    }

    setFeedback({ kind: "success", text: `Deleted ${entry.slug}` });
    load();
  };

  const handlePublish = async () => {
    setPublishing(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/studio/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setFeedback({ kind: "error", text: data.error ?? "Publish failed" });
      } else {
        setFeedback({
          kind: "success",
          text: `Pushed to origin/${data.branch}${
            data.commit ? ` (commit ${data.commit})` : ""
          } — Vercel will deploy it.`,
        });
        load();
      }
    } catch (error) {
      setFeedback({
        kind: "error",
        text: error instanceof Error ? error.message : "Publish failed",
      });
    } finally {
      setPublishing(false);
    }
  };

  if (!entries) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  const publishableFiles = gitStatus?.files.filter((f) => f.publishable) ?? [];
  const otherFiles = gitStatus?.files.filter((f) => !f.publishable) ?? [];
  const canPublish = publishableFiles.length > 0 || (gitStatus?.ahead ?? 0) > 0;

  const sections = types.map((contentType) => ({
    ...contentType,
    entries: entries.filter((entry) => entry.type === contentType.type),
  }));

  return (
    <div className="flex flex-col gap-10">
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

      {sections.map(({ type, label, entries: typeEntries }) => (
        <section key={type} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Heading as="h2" size="lg">
              {label}s
            </Heading>
            <Button asChild size="sm">
              <Link href={`/studio/editor?type=${type}`}>
                <i className="fa-solid fa-plus" /> New {label}
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {typeEntries.length === 0 && (
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                No {label.toLowerCase()}s yet — create the first one.
              </Text>
            )}
            {typeEntries.map((entry) => (
              <Card
                key={`${entry.type}/${entry.slug}`}
                className="flex-row items-center justify-between gap-4 px-4 py-3"
              >
                <div className="min-w-0">
                  <Heading as="h3" size="sm" className="truncate">
                    {entry.title}
                  </Heading>
                  <Text className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    {entry.slug}.mdx
                    {entry.description ? ` — ${entry.description}` : ""}
                  </Text>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button asChild variant="ghost" size="sm">
                    <Link
                      href={`/studio/editor?type=${entry.type}&slug=${entry.slug}`}
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={entry.previewUrl} target="_blank" rel="noreferrer">
                      Preview
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 dark:text-red-400"
                    onClick={() => handleDelete(entry)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="flex flex-col gap-3">
        <Heading as="h2" size="lg">
          Publish
        </Heading>
        <Card className="gap-4 px-4 py-4">
          {gitStatus ? (
            <>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                Branch <code className="font-mono">{gitStatus.branch}</code>
                {gitStatus.ahead > 0 && ` — ${gitStatus.ahead} commit(s) ahead`}
                {gitStatus.behind > 0 &&
                  ` — ${gitStatus.behind} commit(s) behind (pull first!)`}
              </Text>

              {publishableFiles.length > 0 ? (
                <ul className="flex flex-col gap-1 text-sm">
                  {publishableFiles.map((file) => (
                    <li key={file.path} className="font-mono">
                      <span className="mr-2 inline-block w-8 text-neutral-400">
                        {file.status}
                      </span>
                      {file.path}
                    </li>
                  ))}
                </ul>
              ) : (
                <Text className="text-sm">No unpublished content changes.</Text>
              )}

              {otherFiles.length > 0 && (
                <Text className="text-xs text-neutral-400">
                  {otherFiles.length} non-content file(s) changed — studio will
                  not commit those.
                </Text>
              )}

              <div className="flex gap-2">
                <input
                  className="h-9 flex-1 rounded-md border border-neutral-200 bg-transparent px-3 text-sm dark:border-neutral-800"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Commit message"
                />
                <Button
                  size="sm"
                  className="h-9"
                  disabled={!canPublish || publishing}
                  onClick={handlePublish}
                >
                  {publishing ? <Spinner size="sm" /> : "Commit & Push"}
                </Button>
              </div>
            </>
          ) : (
            <Text className="text-sm">Could not read git status.</Text>
          )}
        </Card>
      </section>
    </div>
  );
}
