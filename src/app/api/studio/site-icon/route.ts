import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sharp from "sharp";

import {
  resolveRepoPath,
  SITE_ICON_FILE,
  SITE_ICON_URL,
  siteIconExists,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";

export async function GET() {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  return NextResponse.json({ exists: siteIconExists(), url: SITE_ICON_URL });
}

export async function POST(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Please upload an image file" },
        { status: 400 }
      );
    }

    // Normalize whatever the user uploads to a reasonably sized PNG at the
    // fixed icon path, so the URL is always /assets/icon.png.
    const png = await sharp(Buffer.from(await file.arrayBuffer()))
      .resize(512, 512, { fit: "inside", withoutEnlargement: true })
      .png()
      .toBuffer();

    const filePath = resolveRepoPath(SITE_ICON_FILE);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, png);

    return NextResponse.json({ ok: true, url: SITE_ICON_URL });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to upload" },
      { status: 500 }
    );
  }
}
