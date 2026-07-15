import Link from "next/link";

import { Card, CardBody, CardHeader, Heading, Text } from "@/components/ui";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, href } = props;

  return (
    <Card asChild className="gap-2 px-4 py-3">
      <Link href={href}>
        <CardHeader>
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </CardHeader>

        <CardBody>
          <Text className="text-sm">{description}</Text>
        </CardBody>
      </Link>
    </Card>
  );
};
