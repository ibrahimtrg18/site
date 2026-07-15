import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { isStudioEnabled } from "@/studio/guard";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isStudioEnabled()) notFound();

  return (
    <div className="mx-auto w-full max-w-(--breakpoint-lg) px-4 py-8">
      <header className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
        <Link href="/studio" className="text-xl font-bold">
          Studio
          <span className="ml-2 rounded bg-neutral-100 px-1.5 py-0.5 text-xs font-normal text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
            dev only
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/studio" className="hover:underline">
            Content
          </Link>
          <Link href="/studio/assets" className="hover:underline">
            Assets
          </Link>
          <Link href="/studio/settings" className="hover:underline">
            Settings
          </Link>
          <Link
            href="/"
            className="text-neutral-500 hover:underline dark:text-neutral-400"
          >
            ← Site
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
