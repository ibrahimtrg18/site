import React from "react";
import { Metadata } from "next";
import { Geist } from "next/font/google";

import { GoogleAnalytics, GoogleTagManager } from "@/components";
import { Providers } from "@/components/providers";
import { GOOGLE_ANALYTICS_ID, GOOGLE_TAG_MANAGER_ID } from "@/constants";
import {
  loadStudioConfig,
  SITE_ICON_URL,
  siteIconExists,
} from "@/studio/config";

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
  const iconUrl = siteIconExists() ? SITE_ICON_URL : "";

  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        {site.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={site.googleSiteVerification}
          />
        )}
        {iconUrl && <link rel="icon" href={iconUrl} sizes="any" />}
      </head>
      <body style={{ overflowY: "auto" }} suppressHydrationWarning>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        {GOOGLE_ANALYTICS_ID && (
          <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
        )}
        <Providers site={site} icon={iconUrl}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
