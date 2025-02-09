import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flex } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

import { ProjectCard } from "@/components";

const getProjects = async () => {
  const folderPath = path.join(process.cwd(), "src", "markdown", "projects"); // Absolute path to the folder
  const files = fs.readdirSync(folderPath); // Read folder contents
  const projects = await Promise.all(
    files.map(async (fileName) => {
      const { metadata } = await import(`@/markdown/projects/${fileName}`);

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
      `@/markdown/projects.mdx`
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

  return (
    <Flex direction="column" gap={2}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          {...project.properties}
          href={project.slug}
        />
      ))}
    </Flex>
  );
}
