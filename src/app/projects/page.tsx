import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flex } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

import { ProjectCard } from "@/components";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await import(`@/markdown/projects.mdx`);

    return data.metadata;
  } catch (error) {
    notFound();
  }
}

export default async function ProjectsPage() {
  const folderPath = path.join(process.cwd(), "src", "markdown", "projects"); // Absolute path to the folder
  const files = fs.readdirSync(folderPath); // Read folder contents

  const projects = await Promise.all(
    files.map(async (fileName) => {
      const { data } = await import(`@/markdown/projects/${fileName}`);

      const slug = `/projects/${fileName.replace(/\.mdx?$/, "")}`;

      return <ProjectCard key={data.title} {...data.project} href={slug} />;
    })
  );

  return (
    <Flex direction="column" gap={2}>
      {projects}
    </Flex>
  );
}
