import { Metadata } from "next";

import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { axios } from "../../utils/axios";
import About from "./components/About";
import Me from "./components/Me";
import Technology from "./components/Technology";

export const metadata: Metadata = {
  title: "Me | Ibrahim Tarigan ",
  description: "Me Page",
};

export const dynamic = "force-dynamic";

export default async function MePage() {
  const {
    data: { about },
  } = await axios.get("/api/about");
  const {
    data: { technologies },
  } = await axios.get("/api/technologies");

  return (
    <Container
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
    >
      <Section gap="2rem">
        <Me about={about} />
        <About about={about} />
        <Technology technologies={technologies} />
      </Section>
    </Container>
  );
}
