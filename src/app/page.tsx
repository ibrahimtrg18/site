import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/Container";
// import { Maintenance } from "@/components/Maintenance";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/constants";
import { getApp } from "@/graphql/api/getApp";
import About from "@/views/Home/About";
import DownloadCV from "@/views/Home/DownloadCV";
import Me from "@/views/Home/Me";
import Social from "@/views/Home/Social";
import Technology from "@/views/Home/Technology";

// export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getApp();
  const app = data?.apps[0];

  return {
    title: `Home | ${app?.fullname}`,
    description: app?.about?.text,
    metadataBase: new URL(SITE_URL),
  };
}

export default async function MePage() {
  const { data } = await getApp();
  const app = data?.apps[0];

  return (
    <Container>
      <Section gap="2rem">
        <Flex>
          <Social />
          <DownloadCV />
        </Flex>
        <Me />
        <About />
        <Technology technologies={app?.technologies} />
      </Section>
    </Container>
  );
}
