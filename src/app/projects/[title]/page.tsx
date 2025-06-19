import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flex } from "@chakra-ui/react";
import { Element, MDXProps } from "mdx/types";

type Props = {
  params: { title: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getProject = async (title: string) => {
  const data = await import(`@/modules/project/${title}.mdx`);
  return data;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function ProjectPage({ params }: Props) {
  const { title } = params;

  try {
    const { default: Content }: { default: (props: MDXProps) => Element } =
      await import(`@/modules/project/${title}.mdx`);

    return (
      <Flex flexDirection="column" paddingBottom="1rem">
        <Content />
      </Flex>
    );
  } catch (error) {
    notFound();
  }
}
