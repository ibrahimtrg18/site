"use client";

import { useEffect, useState } from "react";

import { Button, Card, Heading, Spinner, Text } from "@/components/ui";

type ContentTypeConfig = {
  label: string;
  contentDir: string;
  assetsDir: string;
  urlPrefix: string;
};

type StudioConfig = {
  contentTypes: Record<string, ContentTypeConfig>;
};

const FIELDS: Array<{
  key: keyof ContentTypeConfig;
  label: string;
  hint: string;
}> = [
  { key: "label", label: "Label", hint: "Display name in studio" },
  {
    key: "contentDir",
    label: "Content directory",
    hint: "Where .mdx files are written (repo-relative)",
  },
  {
    key: "assetsDir",
    label: "Assets directory",
    hint: "Where uploads go — must be inside public/",
  },
  {
    key: "urlPrefix",
    label: "URL prefix",
    hint: "Public route where entries render, e.g. /projects",
  },
];

export default function StudioSettingsPage() {
  const [config, setConfig] = useState<StudioConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/studio/settings")
      .then((res) => res.json())
      .then((data) => setConfig(data.config));
  }, []);

  const updateField = (
    type: string,
    key: keyof ContentTypeConfig,
    value: string
  ) => {
    setConfig((current) =>
      current
        ? {
            ...current,
            contentTypes: {
              ...current.contentTypes,
              [type]: { ...current.contentTypes[type], [key]: value },
            },
          }
        : current
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/studio/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });
      const data = await res.json();

      if (!res.ok) {
        setFeedback({ kind: "error", text: data.error ?? "Save failed" });
      } else {
        setFeedback({
          kind: "success",
          text: "Saved to studio.config.json — remember it only applies after publish for other machines.",
        });
      }
    } finally {
      setSaving(false);
    }
  };

  if (!config) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Heading as="h2" size="lg">
        Storage settings
      </Heading>

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

      {Object.entries(config.contentTypes).map(([type, contentType]) => (
        <Card key={type} className="gap-4 px-4 py-4">
          <Heading as="h3" size="md">
            {contentType.label}{" "}
            <code className="text-sm font-normal text-neutral-400">
              ({type})
            </code>
          </Heading>

          <div className="grid gap-4 sm:grid-cols-2">
            {FIELDS.map((field) => (
              <label key={field.key} className="flex flex-col gap-1 text-sm">
                <span className="font-medium">{field.label}</span>
                <input
                  className="h-9 rounded-md border border-neutral-200 bg-transparent px-3 font-mono text-sm dark:border-neutral-800"
                  value={contentType[field.key]}
                  onChange={(event) =>
                    updateField(type, field.key, event.target.value)
                  }
                />
                <span className="text-xs text-neutral-400">{field.hint}</span>
              </label>
            ))}
          </div>
        </Card>
      ))}

      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        To add a new content type (e.g. blog), edit{" "}
        <code className="font-mono">studio.config.json</code> and add the
        matching public pages.
      </Text>

      <div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? <Spinner size="sm" /> : "Save settings"}
        </Button>
      </div>
    </div>
  );
}
