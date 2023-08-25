import { Metadata } from "next";

import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { getProjects } from "../../graphql/api/project";
import { ProjectList } from "./components/ProjectList";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Project | Ibrahim Tarigan",
  description:
    "Explore a diverse collection of projects I've passionately worked on and contributed to. From web development to innovative solutions, discover my journey through hands-on experiences and creative contributions.",
};

export default async function ProjectPage() {
  const {
    data: { projects },
  } = await getProjects();

  return (
    <Container
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
    >
      <Section gap="2rem">
        <ProjectList projects={projects} />
      </Section>
    </Container>
  );
}
