import Link from "next/link";

import { Button, Heading, Text } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3">
      <Heading>Not Found</Heading>
      <Text>Could not find requested resource</Text>
      <Button asChild variant="ghost">
        <Link href="/">
          <i className="fa-solid fa-arrow-left"></i> Return Home
        </Link>
      </Button>
    </div>
  );
}
