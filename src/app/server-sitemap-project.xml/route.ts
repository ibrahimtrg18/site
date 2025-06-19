import { getServerSideSitemap } from "next-sitemap";
import fs from "fs";
import path from "path";

import { BASE_URL } from "@/constants";

export async function GET() {
  const folderPath = path.join(process.cwd(), "src", "modules", "project"); // Absolute path to the folder
  const files = fs.readdirSync(folderPath); // Read folder contents
  const excludedFiles = files.filter((file) => file !== "projects.mdx");

  const projects = await Promise.all(
    excludedFiles.map(async (fileName) => {
      const { data } = await import(`@/modules/project/${fileName}`);

      const slug = `/projects/${fileName.replace(/\.mdx?$/, "")}`;

      return {
        ...data,
        slug,
      };
    })
  );

  // sitemap for projects
  const sitemaps = projects.map((project) => {
    return {
      loc: `${BASE_URL}${project.slug}`,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemap(sitemaps);
}
