import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components";
import { Section } from "@/components/Section";
import { BASE_URL } from "@/constants";
import { ProjectComponent } from "@/generated/graphql";
import { getApps } from "@/graphql/api/getApp";
import { getProjectBySlug } from "@/graphql/api/getProjectBySlug";
import { ProjectDetailsPolicy } from "@/views/ProjectDetailsPolicy/ProjectDetailsPolicy";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export const revalidate = 3600;

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

  const images = content?.media?.map((m) => m.url) || [];

  return {
    title: `${project?.title} | ${app?.fullname}`,
    description: content?.description?.text,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: `${project?.title} | ${app?.fullname}`,
      description: content?.description?.text,
      images: [...images, ...previousImages],
      url: `${BASE_URL}/projects/${slug}`,
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
    <Container
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
    >
      <Section gap="2rem">
        <ProjectDetailsPolicy
          content={project?.content[index].component as ProjectComponent}
        />
      </Section>
    </Container>
  );
}
