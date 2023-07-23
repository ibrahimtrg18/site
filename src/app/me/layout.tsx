import { Layout } from "../../components/Layout";

type MeLayoutProps = {
  children: React.ReactNode;
};

export default function MeLayout({ children }: MeLayoutProps) {
  return (
    <Layout
      bgImage="https://img.freepik.com/premium-vector/abstract-background-with-modern-style-hexagon-pattern_7505-1722.jpg?w=2000"
      bgRepeat="repeat"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      backgroundSize="333px"
      // backgroundSize="cover"
    >
      {children}
    </Layout>
  );
}
