import { NextRequest, NextResponse } from "next/server";

import {
  loadStudioConfig,
  saveStudioConfig,
  validateStudioConfig,
} from "@/studio/config";
import { studioDisabledResponse } from "@/studio/guard";

export async function GET() {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  return NextResponse.json({ config: loadStudioConfig() });
}

export async function PUT(request: NextRequest) {
  const disabled = studioDisabledResponse();
  if (disabled) return disabled;

  try {
    const { config } = await request.json();
    const validated = validateStudioConfig(config);

    saveStudioConfig(validated);

    return NextResponse.json({ ok: true, config: validated });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid config" },
      { status: 400 }
    );
  }
}
