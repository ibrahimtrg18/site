import React from "react";

import { Container, Layout } from "@/components";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  );
}
