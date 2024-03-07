import { Metadata } from "next";

import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { getTechnologies } from "../../graphql/api/getTechnologies";
import About from "../../views/Home/About";
import Me from "../../views/Home/Me";
import Technology from "../../views/Home/Technology";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Home | Ibrahim Tarigan",
  description:
    "Hello, I'm Ibrahim Tarigan aka Baim, a passionate Software Engineer with a track record of bringing digital ideas to life. With 2 years of hands-on experience, I specialize in designing, coding, testing, and debugging applications that make an impact. My expertise spans web and mobile development, and I'm dedicated to crafting efficient, user-friendly solutions that exceed expectations. As a collaborative team player, I thrive in cross-functional environments and constantly seek opportunities to expand my technical prowess. Join me on my journey of turning visions into reality.",
};

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
