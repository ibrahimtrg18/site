import fs from "fs";
import path from "path";

import { ProjectCard } from "./project-card";

type ProjectSummary = {
  slug: string;
  properties?: { title?: string; description?: string };
};

const getProjects = async (): Promise<ProjectSummary[]> => {
  const folderPath = path.join(process.cwd(), "public", "projects");
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.mdx?$/.test(file));

  return Promise.all(
    files.map(async (fileName) => {
      const { metadata } = await import(`@public/projects/${fileName}`);

      const slug = `/projects/${fileName.replace(/\.mdx?$/, "")}`;

      return {
        ...metadata,
        slug,
      };
    })
  );
};

export const ProjectList = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.properties?.title ?? project.slug}
          description={project.properties?.description ?? ""}
          href={project.slug}
        />
      ))}
    </div>
  );
};
