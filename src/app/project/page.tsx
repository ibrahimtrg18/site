import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectList } from "@/views/Project/ProjectList";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Project | Ibrahim Tarigan",
  description:
    "Explore a diverse collection of projects I've passionately worked on and contributed to. From web development to innovative solutions, discover my journey through hands-on experiences and creative contributions.",
};

export default async function ProjectPage() {
  return (
    <Container
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
    >
      <Section gap="2rem">
        <ProjectList />
      </Section>
    </Container>
  );
}
