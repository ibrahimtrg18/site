import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Heading, Text } from "@/components/ui";
import { formatDate } from "@/utils/format-date";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getBlog = async (slug: string) => {
  const data = await import(`@/modules/blog/${slug}.mdx`);
  return data;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  try {
    const { slug } = params;

    const { metadata } = await getBlog(slug);

    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch (error) {
    notFound();
  }
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  try {
    const { default: Content, metadata } = await getBlog(slug);
    const properties = metadata?.properties ?? {};

    return (
      <article className="flex flex-col pb-4">
        <header className="my-4 flex flex-col gap-2">
          <Heading as="h1" size="3xl">
            {properties.title ?? slug}
          </Heading>
          {properties.date && (
            <Text className="text-sm text-neutral-500 dark:text-neutral-400">
              {formatDate(properties.date)}
            </Text>
          )}
        </header>
        <Content />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
