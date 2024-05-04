import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Maintenance } from "@/components/Maintenance";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/constants";
import { getApp } from "@/graphql/api/getApp";
import { getConfiguration } from "@/graphql/api/getConfiguration";
import { getTechnologies } from "@/graphql/api/getTechnologies";
import About from "@/views/Home/About";
import Me from "@/views/Home/Me";
import Technology from "@/views/Home/Technology";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { configuration },
  } = await getConfiguration();

  return {
    title: `Home | ${configuration?.about.fullName}`,
    description: configuration?.about.description?.text,
    metadataBase: new URL(SITE_URL),
  };
}

export default async function MePage() {
  const {
    data: { technologies },
  } = await getTechnologies();
  const {
    data: { app },
  } = await getApp();

  if (!app?.page.homePage?.show) {
    return (
      <Container>
        <Maintenance />
      </Container>
    );
  }

  return (
    <Container>
      <Section gap="2rem">
        <Me />
        <About />
        <Technology technologies={technologies} />
      </Section>
    </Container>
  );
}
