import fs from "fs";
import path from "path";

export type ContentTypeConfig = {
  label: string;
  contentDir: string;
  /** Folder inside assetsRoot where editor uploads for this type go (per entry slug). */
  uploadDir: string;
  urlPrefix: string;
};

export type SiteMenuItem = {
  pathname: string;
  label: string;
};

export type SiteConfig = {
  /** Owner name — used as the metadata title suffix ("Page | <name>"). */
  name: string;
  /** Canonical site URL — fallback for BASE_URL in build configs. */
  url: string;
  /** Public path of the site icon. */
  icon: string;
  /** Optional google-site-verification meta content. */
  googleSiteVerification?: string;
  /** Navbar menu items. */
  menu: SiteMenuItem[];
};

export type StudioConfig = {
  site: SiteConfig;
  /** Root folder browsed by the studio file manager. Must be public or inside it. */
  assetsRoot: string;
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

/**
 * Resolves a path relative to the assets root and ensures it stays inside it.
 */
export const resolveAssetsPath = (
  config: StudioConfig,
  ...segments: string[]
) => {
  const root = resolveRepoPath(config.assetsRoot);
  const resolved = path.resolve(root, ...segments);

  if (resolved !== root && !resolved.startsWith(root + path.sep)) {
    throw new Error(`Path escapes assets root: ${segments.join("/")}`);
  }

  return resolved;
};

/** Public URL for an absolute file path inside public/. */
export const toPublicUrl = (filePath: string) => {
  const publicRoot = resolveRepoPath("public");
  return "/" + path.relative(publicRoot, filePath).split(path.sep).join("/");
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

  const { site, assetsRoot, contentTypes } = config as StudioConfig;

  if (typeof site !== "object" || site === null) {
    throw new Error("Config must have a site object");
  }

  for (const field of ["name", "url", "icon"] as const) {
    if (typeof site[field] !== "string" || site[field].length === 0) {
      throw new Error(`site.${field} must be a non-empty string`);
    }
  }

  if (!Array.isArray(site.menu)) {
    throw new Error("site.menu must be an array");
  }

  for (const item of site.menu) {
    if (!item?.pathname?.trim() || !item?.label?.trim()) {
      throw new Error("Every site.menu item needs a pathname and a label");
    }
  }

  if (typeof assetsRoot !== "string" || assetsRoot.length === 0) {
    throw new Error("Config must have an assetsRoot string");
  }

  if (assetsRoot !== "public" && !assetsRoot.startsWith("public/")) {
    throw new Error(
      "assetsRoot must be public or inside it so assets are served by Next.js"
    );
  }

  resolveRepoPath(assetsRoot);

  if (typeof contentTypes !== "object" || contentTypes === null) {
    throw new Error("Config must have a contentTypes object");
  }

  for (const [key, value] of Object.entries(contentTypes)) {
    for (const field of [
      "label",
      "contentDir",
      "uploadDir",
      "urlPrefix",
    ] as const) {
      if (typeof value?.[field] !== "string" || value[field].length === 0) {
        throw new Error(
          `contentTypes.${key}.${field} must be a non-empty string`
        );
      }
    }

    // Throws when a configured directory escapes its allowed root.
    resolveRepoPath(value.contentDir);
    resolveAssetsPath(config as StudioConfig, value.uploadDir);
  }

  return config as StudioConfig;
};
