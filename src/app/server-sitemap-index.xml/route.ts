import { getServerSideSitemap } from "next-sitemap";

import { SITE_URL } from "@/constants";
import { Project } from "@/generated/graphql";
import { getProjects } from "@/graphql/api/getProjects";

export async function GET() {
  const { data } = await getProjects();
  const projects = data?.projects as Project[];

  // sitemap for projects
  const sitemaps = projects.map((project) => {
    return {
      loc: `${SITE_URL}${project.slug}`,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemap(sitemaps);
}
