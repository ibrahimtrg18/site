import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flex } from "@chakra-ui/react";
import { Element, MDXProps } from "mdx/types";

type Props = {
  params: { title: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { title } = params;

    const { metadata } = await import(`@/markdown/projects/${title}.mdx`);

    return metadata;
  } catch (error) {
    notFound();
  }
}

export default async function ProjectPage({ params }: Props) {
  const { title } = params;

  try {
    const { default: Content }: { default: (props: MDXProps) => Element } =
      await import(`@/markdown/projects/${title}.mdx`);

    return (
      <Flex flexDirection="column" gap="1rem">
        <Content />
      </Flex>
    );
  } catch (error) {
    notFound();
  }
}
