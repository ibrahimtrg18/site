import matter, { stringify } from "gray-matter";

import { slugify } from "./slug";

export { slugify };

export type StudioImage = { url: string };

export type StudioEntry = {
  type: string;
  slug: string;
  title: string;
  description: string;
  tags: string;
  /** ISO date (YYYY-MM-DD); used by blog posts for ordering and display. */
  date?: string;
  images: StudioImage[];
  body: string;
  /**
   * True when the file does not match the studio template; `body` then holds
   * the full raw file source and is edited as-is.
   */
  raw: boolean;
};

const SITE_TITLE_SUFFIX = " | Ibrahim Tarigan";

const IMPORT_LINE = /^import\s.*$/gm;
const ASSETS_BLOCK = /export const assets = \{[\s\S]*?\n\}\s*/;
const ASSET_URL = /url:\s*["']([^"']+)["']/g;
const SLIDER_LINE = /^<ProjectSliderImages[^\n]*\/>\s*$/gm;
const BR_LINE = /^<br\s*\/?>\s*$/gm;

const rawEntry = (type: string, slug: string, source: string): StudioEntry => ({
  type,
  slug,
  title: slug,
  description: "",
  tags: "",
  images: [],
  body: source,
  raw: true,
});

export const parseMdxFile = (
  type: string,
  slug: string,
  source: string
): StudioEntry => {
  try {
    const { data, content } = matter(source);

    let images: StudioImage[] = [];
    let body = content;

    const assetsMatch = body.match(ASSETS_BLOCK);
    if (assetsMatch) {
      images = [...assetsMatch[0].matchAll(ASSET_URL)].map((match) => ({
        url: match[1],
      }));
      body = body.replace(ASSETS_BLOCK, "");
    }

    body = body
      .replace(IMPORT_LINE, "")
      .replace(SLIDER_LINE, "")
      .replace(BR_LINE, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    // Anything the template doesn't account for (leftover JSX, imports or
    // exports) cannot round-trip through the form; edit the file raw instead.
    const unclean =
      /^(import|export)\s/m.test(body) || /<\/?[A-Za-z]/.test(body);
    if (unclean) {
      return rawEntry(type, slug, source);
    }

    const properties = (data.properties ?? {}) as Record<string, unknown>;
    const pageTitle = String(data.title ?? "");
    const title = String(
      properties.title ?? pageTitle.replace(SITE_TITLE_SUFFIX, "")
    );
    const description = String(
      properties.description ?? data.description ?? ""
    );
    const rawDate = properties.date ?? data.date;
    const date = rawDate
      ? new Date(String(rawDate)).toISOString().slice(0, 10)
      : undefined;

    return {
      type,
      slug,
      title,
      description,
      tags: String(data.tags ?? ""),
      ...(date && { date }),
      images,
      body,
      raw: false,
    };
  } catch {
    return rawEntry(type, slug, source);
  }
};

export const serializeMdxFile = (entry: StudioEntry): string => {
  if (entry.raw) {
    return entry.body.endsWith("\n") ? entry.body : entry.body + "\n";
  }

  const frontmatter = {
    title: `${entry.title}${SITE_TITLE_SUFFIX}`,
    description: entry.description,
    tags: entry.tags,
    ...(entry.date && { date: entry.date }),
    properties: {
      title: entry.title,
      description: entry.description,
      ...(entry.date && { date: entry.date }),
    },
  };

  const parts: string[] = [];

  // The image slider is a project-template feature; blog images are inline.
  if (entry.type === "project" && entry.images.length > 0) {
    const imageLines = entry.images
      .map((image) => `    { url: ${JSON.stringify(image.url)} },`)
      .join("\n");

    parts.push(`import { ProjectSliderImages } from '@/components'`);
    parts.push(`export const assets = {\n  images: [\n${imageLines}\n  ]\n}`);
    parts.push(`<ProjectSliderImages images={assets.images} />`);
  }

  parts.push(entry.body.trim());

  return stringify("\n" + parts.join("\n\n") + "\n", frontmatter);
};
