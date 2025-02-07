import React from "react";

import {
  Container,
  GoogleAnalytics,
  Layout,
  PageTransition,
} from "@/components";
import { Providers } from "@/components/Providers";
import { GOOGLE_ANALYTICS_ID } from "@/constants";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Dgh3-7chmF8XSw4RmI2T13hmdsE370jbAOLx8y43OJ0"
        />
        <link rel="icon" href="/assets/icon.png" sizes="any" />
      </head>
      <body style={{ overflowY: "auto" }}>
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
        <Providers>
          <Layout
            bgRepeat="repeat"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            backgroundSize="333px"
          >
            <PageTransition>
              <Container
                bgRepeat="repeat"
                backgroundPosition="center"
                backgroundRepeat="repeat"
                backgroundSize="333px"
              >
                {children}
              </Container>
            </PageTransition>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
