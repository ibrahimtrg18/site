import { Metadata } from "next";

import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { getTechnologies } from "../../graphql/queries/technology";
import About from "./components/About";
import Me from "./components/Me";
import Technology from "./components/Technology";

export const metadata: Metadata = {
  title: "Me | Ibrahim Tarigan ",
  description: "Me Page",
};

// export const revalidate = 3600;

export default async function MePage() {
  const {
    data: { technologies },
  } = await getTechnologies();

  return (
    <Container
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
    >
      <Section gap="2rem">
        <Me />
        <About />
        <Technology technologies={technologies} />
      </Section>
    </Container>
  );
}
