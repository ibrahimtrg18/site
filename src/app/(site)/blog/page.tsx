import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

import { BlogCard } from "@/components";
import { Text } from "@/components/ui";

type BlogSummary = {
  slug: string;
  properties?: { title?: string; description?: string; date?: string };
};

const getBlogs = async (): Promise<BlogSummary[]> => {
  const folderPath = path.join(process.cwd(), "src", "modules", "blog");
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.mdx?$/.test(file) && file !== "blogs.mdx");

  const blogs = await Promise.all(
    files.map(async (fileName) => {
      const { metadata } = await import(`@/modules/blog/${fileName}`);

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

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { metadata } = (await import(
      `@/modules/blog/blogs.mdx`
    )) as unknown as { metadata: Metadata };

    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch (error) {
    notFound();
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  const Content = (await import(`@/modules/blog/blogs.mdx`)).default;

  return (
    <div>
      <Content />
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
    </div>
  );
}
