import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { getProjects } from "../../graphql/queries/project";
import { ProjectList } from "./components/ProjectList";

// export const revalidate = 3600;

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
