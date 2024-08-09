import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Maintenance } from "@/components/Maintenance";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/constants";
import { getApp } from "@/graphql/api/getApp";
import { getConfiguration } from "@/graphql/api/getConfiguration";
import { ProjectList } from "@/views/Project/ProjectList";

// export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { configuration },
  } = await getConfiguration();

  return {
    title: `Project | ${configuration?.about.fullName}`,
    description: configuration?.about.description?.text,
    metadataBase: new URL(SITE_URL),
  };
}

export default async function ProjectPage() {
  const {
    data: { app },
  } = await getApp();

  if (!app?.page.projectPage?.show) {
    return (
      <Container>
        <Maintenance />
      </Container>
    );
  }

  return (
    <Container>
      <Section gap="2rem">
        <ProjectList />
      </Section>
    </Container>
  );
}
