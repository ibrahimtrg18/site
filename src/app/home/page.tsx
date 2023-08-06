import { Metadata } from "next";

import { Section } from "../../components/Section";
import { axios } from "../../utils/axios";
import About from "./components/About";
import Me from "./components/Me";
import Tech from "./components/Tech";

export const metadata: Metadata = {
  title: "Me | Ibrahim Tarigan ",
  description: "Me Page",
};

export const dynamic = "force-dynamic";

export default async function MePage() {
  const { data: about } = await axios.get("/api/about");
  const { data: technologies } = await axios.get("/api/technologies");

  return (
    <Section
      as="section"
      direction="column"
      width={["100%", "100%", "45em", "60em", "75em"]}
      justifyContent="center"
      mx="auto"
      px={["1rem", null, null, "2.5rem", "4rem"]}
      py="2rem"
      gap="2rem"
    >
      <Me about={about} />
      <About about={about} />
      <Tech technologies={technologies} />
    </Section>
  );
}
