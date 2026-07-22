import React from "react";
import { Metadata } from "next";
import { Geist } from "next/font/google";

import { GoogleAnalytics, GoogleTagManager } from "@/components";
import { Providers } from "@/components/providers";
import { GOOGLE_ANALYTICS_ID, GOOGLE_TAG_MANAGER_ID } from "@/constants";
import { loadStudioConfig } from "@/studio/config";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const { site } = loadStudioConfig();

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: site.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        {site.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={site.googleSiteVerification}
          />
        )}
        <link rel="icon" href={site.favicon ?? site.icon} sizes="any" />
      </head>
      <body style={{ overflowY: "auto" }} suppressHydrationWarning>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        {GOOGLE_ANALYTICS_ID && (
          <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
        )}
        <Providers site={site}>{children}</Providers>
      </body>
    </html>
  );
}
