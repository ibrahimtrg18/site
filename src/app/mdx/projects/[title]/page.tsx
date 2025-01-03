import { Metadata } from "next";
import { Element, MDXProps } from "mdx/types";

type Props = {
  params: { title: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title } = params;

  const { metadata } = await import(`@/markdown/projects/${title}.mdx`);

  return metadata;
}

export default async function ProjectPage({ params }: Props) {
  const { title } = params;

  const { default: Content }: { default: (props: MDXProps) => Element } =
    await import(`@/markdown/projects/${title}.mdx`);

  return <Content />;
}
