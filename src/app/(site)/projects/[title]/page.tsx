import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Element, MDXProps } from "mdx/types";

import { isDraftSlug } from "@/utils/content";

type Props = {
  params: Promise<{ title: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getProject = async (title: string) => {
  if (isDraftSlug(title)) notFound();

  const data = await import(`../../../../../public/projects/${title}.mdx`);
  return data;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  try {
    const { title } = params;

    const { metadata } = await getProject(title);

    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch (error) {
    notFound();
  }
}

export default async function ProjectPage(props0: Props) {
  const params = await props0.params;
  const { title } = params;

  try {
    const { default: Content }: { default: (props: MDXProps) => Element } =
      await import(`../../../../../public/projects/${title}.mdx`);

    return (
      <div className="flex flex-col pb-4">
        <Content />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
