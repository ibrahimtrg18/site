import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

import {
  getContentType,
  loadStudioConfig,
  resolveAssetsPath,
  toPublicUrl,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";
import { slugify } from "@/studio/mdx-file";

export async function POST(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const targetPath = formData.get("path");
    const type = String(formData.get("type") ?? "");
    const slug = String(formData.get("slug") ?? "");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const config = loadStudioConfig();

    // File-manager uploads pass an explicit folder; editor uploads pass
    // type+slug and land in the type's upload folder.
    let folder: string;
    if (typeof targetPath === "string") {
      folder = targetPath;
    } else {
      if (!slug || slugify(slug) !== slug) {
        return NextResponse.json(
          { error: "A valid kebab-case slug is required before uploading" },
          { status: 400 }
        );
      }
      const contentType = getContentType(config, type);
      folder = path.posix.join(contentType.uploadDir, slug);
    }

    const extension = path.extname(file.name).toLowerCase();
    const baseName = slugify(path.basename(file.name, extension)) || "asset";
    const fileName = `${baseName}${extension}`;

    const dir = resolveAssetsPath(config, folder);
    const filePath = resolveAssetsPath(config, folder, fileName);

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
