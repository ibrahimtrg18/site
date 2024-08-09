import { Metadata } from "next";

import { Container } from "@/components/Container";
// import { Maintenance } from "@/components/Maintenance";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/constants";
import { getApps } from "@/graphql/api/getApp";
import { ProjectList } from "@/views/Project/ProjectList";

// export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getApps();
  const app = data?.apps[0];

  return {
    title: `Project | ${app?.fullname}`,
    description: app?.about?.text,
    metadataBase: new URL(SITE_URL),
  };
}

export default async function ProjectPage() {
  // const { data } = await getApp();
  // const app = data?.apps[0];

  // TODO: remake flow
  // if (!app?.page.projectPage?.show) {
  //   return (
  //     <Container>
  //       <Maintenance />
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <Section gap="2rem">
        <ProjectList />
      </Section>
    </Container>
  );
}
