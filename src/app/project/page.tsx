import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { UnderMaintain } from "../../components/UnderMaintain";

export const revalidate = 3600;

export default function ProjectPage() {
  return (
    <Container
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
    >
      <Section>
        <UnderMaintain />
      </Section>
    </Container>
  );
}
