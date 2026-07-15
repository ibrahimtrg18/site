import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

import {
  getContentType,
  loadStudioConfig,
  resolveRepoPath,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";
import { slugify } from "@/studio/mdx-file";

const PUBLIC_DIR = "public";

const toPublicUrl = (filePath: string) => {
  const publicRoot = resolveRepoPath(PUBLIC_DIR);
  return "/" + path.relative(publicRoot, filePath).split(path.sep).join("/");
};

export async function GET(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const type = request.nextUrl.searchParams.get("type") ?? "";
    const slug = request.nextUrl.searchParams.get("slug") ?? "";

    const config = loadStudioConfig();
    const contentType = getContentType(config, type);

    const dir = resolveRepoPath(contentType.assetsDir, slug);

    if (!slug || !fs.existsSync(dir)) {
      return NextResponse.json({ assets: [] });
    }

    const assets = fs
      .readdirSync(dir)
      .filter((file) => !file.startsWith("."))
      .map((file) => ({ url: toPublicUrl(path.join(dir, file)) }));

    return NextResponse.json({ assets });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to list" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const type = String(formData.get("type") ?? "");
    const slug = String(formData.get("slug") ?? "");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!slug || slugify(slug) !== slug) {
      return NextResponse.json(
        { error: "A valid kebab-case slug is required before uploading" },
        { status: 400 }
      );
    }

    const config = loadStudioConfig();
    const contentType = getContentType(config, type);

    const extension = path.extname(file.name).toLowerCase();
    const baseName = slugify(path.basename(file.name, extension)) || "asset";
    const fileName = `${baseName}${extension}`;

    const dir = resolveRepoPath(contentType.assetsDir, slug);
    const filePath = resolveRepoPath(contentType.assetsDir, slug, fileName);

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

    return NextResponse.json({ url: toPublicUrl(filePath) });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to upload" },
      { status: 500 }
    );
  }
}
