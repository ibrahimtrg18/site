import Link from "next/link";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, href } = props;

  return (
    <Card px={4} py={3} gap={2} as={Link} href={href}>
      <CardHeader p={0}>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody p={0}>
        <Box>
          <Text fontSize="sm">{description}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};
