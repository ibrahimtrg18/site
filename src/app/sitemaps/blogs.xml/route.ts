import { getServerSideSitemap } from "next-sitemap";
import fs from "fs";
import path from "path";

import { BASE_URL } from "@/constants";

export async function GET() {
  const folderPath = path.join(process.cwd(), "src", "modules", "blog");
  const files = fs.readdirSync(folderPath);
  const excludedFiles = files.filter((file) => file !== "blogs.mdx");

  const blogs = await Promise.all(
    excludedFiles.map(async (fileName) => {
      const { metadata } = await import(`@/modules/blog/${fileName}`);

      const slug = `/blog/${fileName.replace(/\.mdx?$/, "")}`;

      return {
        date: metadata?.properties?.date,
        slug,
      };
    })
  );

  const sitemaps = blogs.map((blog) => {
    return {
      loc: `${BASE_URL}${blog.slug}`,
      lastmod: blog.date
        ? new Date(blog.date).toISOString()
        : new Date().toISOString(),
    };
  });

  return getServerSideSitemap(sitemaps);
}
