import { Flex } from "@chakra-ui/react";
import fs from "fs";
import path from "path";

import { ProjectCard } from "@/components";

export { metadata } from "@/markdown/projects.mdx";

export default async function ProjectsPage() {
  const folderPath = path.join(process.cwd(), "src", "markdown", "projects"); // Absolute path to the folder
  const files = fs.readdirSync(folderPath); // Read folder contents

  const projects = await Promise.all(
    files.map(async (fileName) => {
      const { metadata } = await import(`@/markdown/projects/${fileName}`);

      const slug = `/mdx/projects/${fileName.replace(/\.mdx?$/, "")}`; // @TODO remove /mdx

      return (
        <ProjectCard key={metadata.title} {...metadata.project} href={slug} />
      );
    })
  );

  return (
    <Flex direction="column" gap={2}>
      {projects}
    </Flex>
  );
}
