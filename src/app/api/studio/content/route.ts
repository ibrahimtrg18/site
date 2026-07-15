import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import {
  getContentType,
  loadStudioConfig,
  resolveRepoPath,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";
import { serializeMdxFile, slugify, StudioEntry } from "@/studio/mdx-file";

export async function GET() {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  const config = loadStudioConfig();

  const entries = Object.entries(config.contentTypes).flatMap(
    ([type, contentType]) => {
      const dir = resolveRepoPath(contentType.contentDir);

      if (!fs.existsSync(dir)) return [];

      return fs
        .readdirSync(dir)
        .filter((file) => /\.mdx?$/.test(file))
        .map((file) => {
          const slug = file.replace(/\.mdx?$/, "");
          const source = fs.readFileSync(path.join(dir, file), "utf-8");

          let title = slug;
          let description = "";
          try {
            const { data } = matter(source);
            const properties = (data.properties ?? {}) as Record<
              string,
              unknown
            >;
            title = String(properties.title ?? data.title ?? slug);
            description = String(
              properties.description ?? data.description ?? ""
            );
          } catch {
            // Unparseable frontmatter; fall back to the slug.
          }

          const isIndex = file === contentType.indexFile;

          return {
            type,
            typeLabel: contentType.label,
            slug,
            title,
            description,
            isIndex,
            previewUrl: isIndex
              ? contentType.urlPrefix
              : `${contentType.urlPrefix}/${slug}`,
          };
        });
    }
  );

  return NextResponse.json({ entries });
}

export async function POST(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { entry, overwrite } = (await request.json()) as {
      entry: StudioEntry;
      overwrite?: boolean;
    };

    const config = loadStudioConfig();
    const contentType = getContentType(config, entry.type);

    if (!entry.slug || slugify(entry.slug) !== entry.slug) {
      return NextResponse.json(
        { error: "Slug must be non-empty kebab-case (a-z, 0-9, dashes)" },
        { status: 400 }
      );
    }

    if (!entry.raw && !entry.title.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const filePath = resolveRepoPath(
      contentType.contentDir,
      `${entry.slug}.mdx`
    );

    if (!overwrite && fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `"${entry.slug}.mdx" already exists`, exists: true },
        { status: 409 }
      );
    }

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, serializeMdxFile(entry));

    return NextResponse.json({
      ok: true,
      path: path.relative(process.cwd(), filePath),
      previewUrl: `${contentType.urlPrefix}/${entry.slug}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to save" },
      { status: 500 }
    );
  }
}
