import { Metadata } from "next";

import { Section } from "../../components/Section";
import { get } from "../../utils/fetch";
import { ResponseGetAbout } from "../api/about/route";
import { ResponseGetMe } from "../api/me/route";
import About from "./components/About";
import Me from "./components/Me";

export const metadata: Metadata = {
  title: "Me | Ibrahim Tarigan ",
  description: "Me Page",
};

export default async function MePage() {
  const { data: meData } = await get<ResponseGetMe>("/api/me");
  const { data: aboutData } = await get<ResponseGetAbout>("/api/about");

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
      <Me {...meData} />
      <About {...aboutData} />
    </Section>
  );
}
