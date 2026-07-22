import Link from "next/link";

import { Card, CardBody, CardHeader, Heading, Text } from "@/components/ui";
import { formatDate } from "@/utils/format-date";

type BlogCardProps = {
  title: string;
  description: string;
  date?: string;
  href: string;
};

export const BlogCard = (props: BlogCardProps) => {
  const { title, description, date, href } = props;

  return (
    <Card asChild className="gap-2 px-4 py-3">
      <Link href={href}>
        <CardHeader className="flex-row items-baseline justify-between gap-4">
          <Heading as="h3" size="md">
            {title}
          </Heading>
          {date && (
            <Text
              as="span"
              className="shrink-0 text-xs text-neutral-500 dark:text-neutral-400"
            >
              {formatDate(date)}
            </Text>
          )}
        </CardHeader>

        <CardBody>
          <Text className="text-sm">{description}</Text>
        </CardBody>
      </Link>
    </Card>
  );
};
