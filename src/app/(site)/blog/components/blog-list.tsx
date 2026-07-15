import fs from "fs";
import path from "path";

import { Text } from "@/components/ui";

import { BlogCard } from "./blog-card";

type BlogSummary = {
  slug: string;
  properties?: { title?: string; description?: string; date?: string };
};

const getBlogs = async (): Promise<BlogSummary[]> => {
  const folderPath = path.join(process.cwd(), "public", "blogs");

  if (!fs.existsSync(folderPath)) return [];

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.mdx?$/.test(file));

  const blogs = await Promise.all(
    files.map(async (fileName) => {
      const { metadata } = await import(`@public/blogs/${fileName}`);

      const slug = `/blog/${fileName.replace(/\.mdx?$/, "")}`;

      return {
        ...metadata,
        slug,
      };
    })
  );

  return blogs.sort(
    (a, b) =>
      new Date(b.properties?.date ?? 0).getTime() -
      new Date(a.properties?.date ?? 0).getTime()
  );
};

export const BlogList = async () => {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col gap-2">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          title={blog.properties?.title ?? blog.slug}
          description={blog.properties?.description ?? ""}
          date={blog.properties?.date}
          href={blog.slug}
        />
      ))}
      {blogs.length === 0 && (
        <Text className="text-neutral-500 dark:text-neutral-400">
          No posts yet — check back soon.
        </Text>
      )}
    </div>
  );
};
