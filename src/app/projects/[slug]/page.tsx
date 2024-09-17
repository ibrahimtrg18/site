import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/constants";
import { ProjectComponent } from "@/generated/graphql";
import { getApps } from "@/graphql/api/getApp";
import { getProjectBySlug } from "@/graphql/api/getProjectBySlug";
import { ProjectDetail } from "@/views/ProjectDetails/ProjectDetail";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 3600;

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const app = (await getApps()).data.apps[0];

  const project = (await getProjectBySlug("/projects/" + slug)).data.project;
  const index = project!.content.length - 1 || 0;

  const content = project?.content?.[index].component as ProjectComponent;

  if (!project) {
    return notFound();
  }

  const previousImages = (await parent).openGraph?.images || [];

  const images = content?.media?.map((m) => m.url);

  return {
    title: `${project.title} | ${app?.fullname}`,
    description: content?.description?.text,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: `${project.title} | ${app?.fullname}`,
      description: content?.description?.text,
      images: [...images, ...previousImages],
      url: `${SITE_URL}/projects/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectPage({ params: { slug } }: Props) {
  const project = (await getProjectBySlug("/projects/" + slug)).data.project;
  const index = project!.content.length - 1 || 0;

  return (
    <Container>
      <Section gap="2rem">
        <ProjectDetail
          content={project?.content[index].component as ProjectComponent}
        />
      </Section>
    </Container>
  );
}
