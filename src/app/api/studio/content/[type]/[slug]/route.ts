import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

import {
  getContentType,
  loadStudioConfig,
  resolveRepoPath,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";
import { parseMdxFile } from "@/studio/mdx-file";

type RouteContext = {
  params: Promise<{ type: string; slug: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { type, slug } = await context.params;
    const config = loadStudioConfig();
    const contentType = getContentType(config, type);

    const filePath = resolveRepoPath(contentType.contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const source = fs.readFileSync(filePath, "utf-8");
    const entry = parseMdxFile(type, slug, source);

    return NextResponse.json({ entry });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to read" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { type, slug } = await context.params;
    const config = loadStudioConfig();
    const contentType = getContentType(config, type);

    const filePath = resolveRepoPath(contentType.contentDir, `${slug}.mdx`);
    const assetsPath = resolveRepoPath(contentType.assetsDir, slug);

    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath);
    }

    if (fs.existsSync(assetsPath)) {
      fs.rmSync(assetsPath, { recursive: true });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete" },
      { status: 500 }
    );
  }
}
