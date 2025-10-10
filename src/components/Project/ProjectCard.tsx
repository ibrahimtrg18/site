import Link from "next/link";
import { Box, Card, Heading, Text } from "@chakra-ui/react";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, href } = props;

  return (
    <Card.Root asChild px={4} py={3} gap={2}>
      <Link href={href}>
        <Card.Header p={0}>
          <Heading size="md">{title}</Heading>
        </Card.Header>

        <Card.Body p={0}>
          <Box>
            <Text fontSize="sm">{description}</Text>
          </Box>
        </Card.Body>
      </Link>
    </Card.Root>
  );
};
