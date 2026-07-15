import React from "react";
import { Geist } from "next/font/google";

import {
  Container,
  GoogleAnalytics,
  GoogleTagManager,
  Layout,
} from "@/components";
import { Providers } from "@/components/Providers";
import { GOOGLE_ANALYTICS_ID, GOOGLE_TAG_MANAGER_ID } from "@/constants";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="Dgh3-7chmF8XSw4RmI2T13hmdsE370jbAOLx8y43OJ0"
        />
        <link rel="icon" href="/assets/icon.png" sizes="any" />
      </head>
      <body style={{ overflowY: "auto" }} suppressHydrationWarning>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        {GOOGLE_ANALYTICS_ID && (
          <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
        )}
        <Providers>
          <Layout
            bgRepeat="repeat"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            backgroundSize="333px"
          >
            <Container
              bgRepeat="repeat"
              backgroundPosition="center"
              backgroundRepeat="repeat"
              backgroundSize="333px"
            >
              {children}
            </Container>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
