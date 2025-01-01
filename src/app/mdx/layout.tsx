import { Container } from "@/components";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      bgRepeat="repeat"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      backgroundSize="333px"
    >
      {children}
    </Container>
  );
}
