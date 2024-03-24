import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Maintenance } from "@/components/Maintenance";
import { Section } from "@/components/Section";
import { getApp } from "@/graphql/api/getApp";
import { ProjectList } from "@/views/Project/ProjectList";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Project | Ibrahim Tarigan",
  description:
    "Explore a diverse collection of projects I've passionately worked on and contributed to. From web development to innovative solutions, discover my journey through hands-on experiences and creative contributions.",
};

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
