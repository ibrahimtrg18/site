import React from "react";
import { Analytics } from "@vercel/analytics/react";

import { Layout } from "../components/Layout";
import { Providers } from "../components/Providers";
import { getConfiguration } from "../graphql/api/configuration";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const {
    data: { configuration },
  } = await getConfiguration();

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Dgh3-7chmF8XSw4RmI2T13hmdsE370jbAOLx8y43OJ0"
        />
      </head>
      <body style={{ overflowY: "auto" }}>
        <Providers configuration={configuration}>
          <Layout
            bgRepeat="repeat"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            backgroundSize="333px"
          >
            {children}
          </Layout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
