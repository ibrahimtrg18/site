import fs from "fs";
import path from "path";

export type ContentTypeConfig = {
  label: string;
  contentDir: string;
  assetsDir: string;
  urlPrefix: string;
};

export type StudioConfig = {
  contentTypes: Record<string, ContentTypeConfig>;
};

export const REPO_ROOT = process.cwd();

const CONFIG_PATH = path.join(REPO_ROOT, "studio.config.json");

export const loadStudioConfig = (): StudioConfig => {
  const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
  return JSON.parse(raw) as StudioConfig;
};

export const saveStudioConfig = (config: StudioConfig) => {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + "\n");
};

/**
 * Resolves a repo-relative directory and ensures it cannot escape the repo
 * root (protects against typos in studio.config.json).
 */
export const resolveRepoPath = (...segments: string[]) => {
  const resolved = path.resolve(REPO_ROOT, ...segments);

  if (resolved !== REPO_ROOT && !resolved.startsWith(REPO_ROOT + path.sep)) {
    throw new Error(`Path escapes repository root: ${segments.join("/")}`);
  }

  return resolved;
};

export const getContentType = (config: StudioConfig, type: string) => {
  const contentType = config.contentTypes[type];

  if (!contentType) {
    throw new Error(`Unknown content type: ${type}`);
  }

  return contentType;
};

export const validateStudioConfig = (config: unknown): StudioConfig => {
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be an object");
  }

  const { contentTypes } = config as StudioConfig;

  if (typeof contentTypes !== "object" || contentTypes === null) {
    throw new Error("Config must have a contentTypes object");
  }

  for (const [key, value] of Object.entries(contentTypes)) {
    for (const field of [
      "label",
      "contentDir",
      "assetsDir",
      "urlPrefix",
    ] as const) {
      if (typeof value?.[field] !== "string" || value[field].length === 0) {
        throw new Error(
          `contentTypes.${key}.${field} must be a non-empty string`
        );
      }
    }

    // Throws when a configured directory escapes the repository.
    resolveRepoPath(value.contentDir);
    resolveRepoPath(value.assetsDir);

    if (!value.assetsDir.startsWith("public/")) {
      throw new Error(
        `contentTypes.${key}.assetsDir must be inside public/ so assets are served by Next.js`
      );
    }
  }

  return config as StudioConfig;
};
