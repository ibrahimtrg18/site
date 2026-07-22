import { NextResponse } from "next/server";

export const isStudioEnabled = () => process.env.NODE_ENV === "development";

/**
 * Returns a 404 response when studio is disabled (production), otherwise null.
 * Use at the top of every studio API route handler.
 */
export const studioDisabledResponse = () => {
  if (isStudioEnabled()) return null;

  return NextResponse.json({ error: "Not found" }, { status: 404 });
};
