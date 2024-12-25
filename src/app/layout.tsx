import React from "react";

import { Layout } from "@/components";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTransition from "@/components/PageTransition";
import { Providers } from "@/components/Providers";
import { GOOGLE_ANALYTICS_ID } from "@/constants";
import { App } from "@/generated/graphql";
import { getApps } from "@/graphql/api/getApp";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const { data } = await getApps();
  const apps = data?.apps;
  const [app] = apps as unknown as App[];

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Dgh3-7chmF8XSw4RmI2T13hmdsE370jbAOLx8y43OJ0"
        />
        <link rel="icon" href={app?.avatar?.url} sizes="any" />
      </head>
      <body style={{ overflowY: "auto" }}>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        <Providers app={app}>
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
