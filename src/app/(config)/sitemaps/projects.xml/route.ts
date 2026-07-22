import { getServerSideSitemap } from "next-sitemap";
import fs from "fs";
import path from "path";

import { BASE_URL } from "@/constants";
import { isPublishedMdx } from "@/utils/content";

export async function GET() {
  const folderPath = path.join(process.cwd(), "public", "projects");
  const files = fs.readdirSync(folderPath);
  const excludedFiles = files.filter(isPublishedMdx);

  const projects = await Promise.all(
    excludedFiles.map(async (fileName) => {
      const { data } = await import(
        `../../../../../public/projects/${fileName}`
      );

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
