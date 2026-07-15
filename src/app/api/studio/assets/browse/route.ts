import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

import {
  loadStudioConfig,
  resolveAssetsPath,
  toPublicUrl,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
  ".ico",
]);

export async function GET(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const relPath = request.nextUrl.searchParams.get("path") ?? "";
    const config = loadStudioConfig();
    const dir = resolveAssetsPath(config, relPath);

    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
      return NextResponse.json({ error: "Folder not found" }, { status: 404 });
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const folders = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => ({ name: entry.name }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const files = entries
      .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
      .map((entry) => {
        const filePath = path.join(dir, entry.name);
        const stat = fs.statSync(filePath);
        return {
          name: entry.name,
          url: toPublicUrl(filePath),
          size: stat.size,
          isImage: IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({ path: relPath, folders, files });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to browse" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { path: relPath } = (await request.json()) as { path: string };

    if (!relPath?.trim()) {
      return NextResponse.json(
        { error: "Folder name is required" },
        { status: 400 }
      );
    }

    const config = loadStudioConfig();
    const dir = resolveAssetsPath(config, relPath);

    fs.mkdirSync(dir, { recursive: true });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create folder",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { from, to } = (await request.json()) as { from: string; to: string };

    if (!from?.trim() || !to?.trim()) {
      return NextResponse.json(
        { error: "Both from and to paths are required" },
        { status: 400 }
      );
    }

    const config = loadStudioConfig();
    const fromPath = resolveAssetsPath(config, from);
    const toPath = resolveAssetsPath(config, to);

    if (!fs.existsSync(fromPath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (fs.existsSync(toPath)) {
      return NextResponse.json(
        { error: "Target already exists" },
        { status: 409 }
      );
    }

    fs.mkdirSync(path.dirname(toPath), { recursive: true });
    fs.renameSync(fromPath, toPath);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to rename" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const relPath = request.nextUrl.searchParams.get("path") ?? "";

    if (!relPath.trim()) {
      return NextResponse.json(
        { error: "Refusing to delete the assets root" },
        { status: 400 }
      );
    }

    const config = loadStudioConfig();
    const target = resolveAssetsPath(config, relPath);

    if (!fs.existsSync(target)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    fs.rmSync(target, { recursive: true });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete" },
      { status: 500 }
    );
  }
}
