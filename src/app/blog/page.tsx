import { Container } from "@/components/Container";
import { Maintenance } from "@/components/Maintenance";
import { Section } from "@/components/Section";
import { getApp } from "@/graphql/api/getApp";

// export const revalidate = 3600;

export default async function BlogPage() {
  const {
    data: { app },
  } = await getApp();

  if (!app?.page.blogPage.show) {
    return (
      <Container>
        <Maintenance />
      </Container>
    );
  }

  return (
    <Container>
      <Section>Blog Page</Section>
    </Container>
  );
}
