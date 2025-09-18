import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Flex } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

import { ProjectCard } from "@/components";

const getProjects = async () => {
  const folderPath = path.join(process.cwd(), "src", "modules", "project");
  const files = fs.readdirSync(folderPath);
  const excludedFiles = files.filter((file) => file !== "projects.mdx");
  const projects = await Promise.all(
    excludedFiles.map(async (fileName) => {
      const { metadata } = await import(`@/modules/project/${fileName}`);

      const slug = `/projects/${fileName.replace(/\.mdx?$/, "")}`;

      return {
        ...metadata,
        slug,
      };
    })
  );

  return projects;
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { metadata } = (await import(
      `@/modules/project/projects.mdx`
    )) as unknown as { metadata: Metadata };

    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch (error) {
    notFound();
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  const Content = (await import(`@/modules/project/projects.mdx`)).default;

  return (
    <Box>
      <Content />
      <Flex direction="column" gap={2}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project.properties}
            href={project.slug}
          />
        ))}
      </Flex>
    </Box>
  );
}
