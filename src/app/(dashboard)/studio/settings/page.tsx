"use client";

import { useEffect, useState } from "react";

import { Button, Card, Heading, Spinner, Text } from "@/components/ui";

type ContentTypeConfig = {
  label: string;
  contentDir: string;
  uploadDir: string;
  urlPrefix: string;
};

type SiteSocialItem = { label: string; icon: string; href: string };

type SiteConfig = {
  name: string;
  url: string;
  googleSiteVerification?: string;
  menu: Array<{ pathname: string; label: string }>;
  social?: SiteSocialItem[];
};

type StudioConfig = {
  site: SiteConfig;
  assetsRoot: string;
  contentTypes: Record<string, ContentTypeConfig>;
};

const SITE_ICON_URL = "/assets/icon.png";

const SITE_FIELDS: Array<{
  key: "name" | "url" | "googleSiteVerification";
  label: string;
  hint: string;
}> = [
  {
    key: "name",
    label: "Site name",
    hint: "Your name — appended to every page title (Page | Name)",
  },
  {
    key: "url",
    label: "Site URL",
    hint: "Canonical URL used for sitemaps and metadata",
  },
  {
    key: "googleSiteVerification",
    label: "Google site verification",
    hint: "Optional — content of the google-site-verification meta tag",
  },
];

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
    key: "uploadDir",
    label: "Upload folder",
    hint: "Folder inside the assets root where editor uploads go (per slug)",
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
  const [iconExists, setIconExists] = useState(false);
  const [iconVersion, setIconVersion] = useState(Date.now());
  const [iconUploading, setIconUploading] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/studio/settings")
      .then((res) => res.json())
      .then((data) => setConfig(data.config));

    fetch("/api/studio/site-icon")
      .then((res) => res.json())
      .then((data) => setIconExists(Boolean(data.exists)));
  }, []);

  const handleIconUpload = async (file: File | undefined) => {
    if (!file) return;

    setIconUploading(true);
    setFeedback(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/studio/site-icon", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setFeedback({ kind: "error", text: data.error ?? "Upload failed" });
        return;
      }

      setIconExists(true);
      setIconVersion(Date.now()); // cache-bust the preview
      setFeedback({ kind: "success", text: "Icon updated." });
    } finally {
      setIconUploading(false);
    }
  };

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
        Settings
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

      <Card className="gap-4 px-4 py-4">
        <Heading as="h3" size="md">
          Site
        </Heading>

        <div className="grid gap-4 sm:grid-cols-2">
          {SITE_FIELDS.map((field) => (
            <label key={field.key} className="flex flex-col gap-1 text-sm">
              <span className="font-medium">{field.label}</span>
              <input
                className="h-9 rounded-md border border-neutral-200 bg-transparent px-3 text-sm dark:border-neutral-800"
                value={config.site[field.key] ?? ""}
                onChange={(event) =>
                  setConfig((current) =>
                    current
                      ? {
                          ...current,
                          site: {
                            ...current.site,
                            [field.key]: event.target.value,
                          },
                        }
                      : null
                  )
                }
              />
              <span className="text-xs text-neutral-400">{field.hint}</span>
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Icon</span>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
              {iconExists ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={iconVersion}
                  src={`${SITE_ICON_URL}?v=${iconVersion}`}
                  alt="Site icon"
                  className="h-full w-full object-cover"
                />
              ) : (
                <i className="fa-solid fa-user text-2xl text-neutral-400" />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label>
                <Button asChild size="sm" className="cursor-pointer">
                  <span>
                    {iconUploading ? (
                      <Spinner size="sm" />
                    ) : iconExists ? (
                      "Replace icon"
                    ) : (
                      "Upload icon"
                    )}
                  </span>
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={iconUploading}
                  onChange={(event) => {
                    handleIconUpload(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
              </label>
              <span className="text-xs text-neutral-400">
                Used as the navbar avatar and browser favicon. Saved to{" "}
                <code className="font-mono">{SITE_ICON_URL}</code>.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Navbar menu</span>
          {config.site.menu.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                className="h-9 flex-1 rounded-md border border-neutral-200 bg-transparent px-3 text-sm dark:border-neutral-800"
                value={item.label}
                placeholder="Label"
                onChange={(event) =>
                  setConfig((current) => {
                    if (!current) return null;
                    const menu = [...current.site.menu];
                    menu[index] = { ...menu[index], label: event.target.value };
                    return { ...current, site: { ...current.site, menu } };
                  })
                }
              />
              <input
                className="h-9 flex-1 rounded-md border border-neutral-200 bg-transparent px-3 font-mono text-sm dark:border-neutral-800"
                value={item.pathname}
                placeholder="/path"
                onChange={(event) =>
                  setConfig((current) => {
                    if (!current) return null;
                    const menu = [...current.site.menu];
                    menu[index] = {
                      ...menu[index],
                      pathname: event.target.value,
                    };
                    return { ...current, site: { ...current.site, menu } };
                  })
                }
              />
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 dark:text-red-400"
                onClick={() =>
                  setConfig((current) =>
                    current
                      ? {
                          ...current,
                          site: {
                            ...current.site,
                            menu: current.site.menu.filter(
                              (_, i) => i !== index
                            ),
                          },
                        }
                      : null
                  )
                }
              >
                Remove
              </Button>
            </div>
          ))}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setConfig((current) =>
                  current
                    ? {
                        ...current,
                        site: {
                          ...current.site,
                          menu: [
                            ...current.site.menu,
                            { pathname: "", label: "" },
                          ],
                        },
                      }
                    : null
                )
              }
            >
              + Add menu item
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Social links</span>
          <span className="text-xs text-neutral-400">
            Shown on the home page. Icon is a Font Awesome class, e.g. “fab
            fa-github”.
          </span>
          {(config.site.social ?? []).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                className="h-9 w-28 rounded-md border border-neutral-200 bg-transparent px-3 text-sm dark:border-neutral-800"
                value={item.label}
                placeholder="Label"
                onChange={(event) =>
                  setConfig((current) => {
                    if (!current) return null;
                    const social = [...(current.site.social ?? [])];
                    social[index] = {
                      ...social[index],
                      label: event.target.value,
                    };
                    return { ...current, site: { ...current.site, social } };
                  })
                }
              />
              <input
                className="h-9 w-40 rounded-md border border-neutral-200 bg-transparent px-3 font-mono text-sm dark:border-neutral-800"
                value={item.icon}
                placeholder="fab fa-github"
                onChange={(event) =>
                  setConfig((current) => {
                    if (!current) return null;
                    const social = [...(current.site.social ?? [])];
                    social[index] = {
                      ...social[index],
                      icon: event.target.value,
                    };
                    return { ...current, site: { ...current.site, social } };
                  })
                }
              />
              <input
                className="h-9 flex-1 rounded-md border border-neutral-200 bg-transparent px-3 font-mono text-sm dark:border-neutral-800"
                value={item.href}
                placeholder="https://…"
                onChange={(event) =>
                  setConfig((current) => {
                    if (!current) return null;
                    const social = [...(current.site.social ?? [])];
                    social[index] = {
                      ...social[index],
                      href: event.target.value,
                    };
                    return { ...current, site: { ...current.site, social } };
                  })
                }
              />
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 dark:text-red-400"
                onClick={() =>
                  setConfig((current) =>
                    current
                      ? {
                          ...current,
                          site: {
                            ...current.site,
                            social: (current.site.social ?? []).filter(
                              (_, i) => i !== index
                            ),
                          },
                        }
                      : null
                  )
                }
              >
                Remove
              </Button>
            </div>
          ))}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setConfig((current) =>
                  current
                    ? {
                        ...current,
                        site: {
                          ...current.site,
                          social: [
                            ...(current.site.social ?? []),
                            { label: "", icon: "", href: "" },
                          ],
                        },
                      }
                    : null
                )
              }
            >
              + Add social link
            </Button>
          </div>
        </div>
      </Card>

      <Card className="gap-4 px-4 py-4">
        <Heading as="h3" size="md">
          Assets
        </Heading>
        <label className="flex max-w-md flex-col gap-1 text-sm">
          <span className="font-medium">Assets root</span>
          <input
            className="h-9 rounded-md border border-neutral-200 bg-transparent px-3 font-mono text-sm dark:border-neutral-800"
            value={config.assetsRoot}
            onChange={(event) =>
              setConfig((current) =>
                current ? { ...current, assetsRoot: event.target.value } : null
              )
            }
          />
          <span className="text-xs text-neutral-400">
            Root folder browsed by the file manager — public or a folder inside
            it
          </span>
        </label>
      </Card>

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
