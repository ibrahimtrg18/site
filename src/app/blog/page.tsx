import { Section } from "../../components/Section";

export default function BlogPage() {
  return (
    <Section
      as="section"
      direction="column"
      width={["100%", "100%", "45em", "60em", "75em"]}
      justifyContent="center"
      mx="auto"
      px={["1rem", null, null, "2.5rem", "4rem"]}
      py="2rem"
      gap="2rem"
    >
      Blog
    </Section>
  );
}
