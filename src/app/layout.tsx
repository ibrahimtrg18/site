import React from "react";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Layout } from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Providers } from "@/components/Providers";
import { GOOGLE_ANALYTICS_ID } from "@/constants";
import { getApp } from "@/graphql/api/getApp";
import { getConfiguration } from "@/graphql/api/getConfiguration";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const {
    data: { configuration },
  } = await getConfiguration();

  const {
    data: { app },
  } = await getApp();

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Dgh3-7chmF8XSw4RmI2T13hmdsE370jbAOLx8y43OJ0"
        />
      </head>
      <body style={{ overflowY: "auto" }}>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        <Providers configuration={configuration} app={app}>
          <Layout
            bgRepeat="repeat"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            backgroundSize="333px"
          >
            <PageTransition>{children}</PageTransition>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
