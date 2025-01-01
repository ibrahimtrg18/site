import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";

import { Container } from "@/components";
import { Section } from "@/components/Section";
import { BASE_URL } from "@/constants";
import { getApps } from "@/graphql/api/getApp";
import About from "@/views/Home/About";
import DownloadCV from "@/views/Home/DownloadCV";
import Me from "@/views/Home/Me";
import Social from "@/views/Home/Social";
import Technology from "@/views/Home/Technology";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getApps();
  const [app] = data?.apps ?? [];

  return {
    title: `Home | ${app?.fullname}`,
    description: app?.about?.text,
    metadataBase: new URL(BASE_URL),
  };
}

export default async function MePage() {
  return (
    <Container>
      <Section gap="2rem">
        <Flex>
          <Social />
          <DownloadCV />
        </Flex>
        <Me />
        <About />
        <Technology />
      </Section>
    </Container>
  );
}
