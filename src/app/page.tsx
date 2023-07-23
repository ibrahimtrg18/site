import { Metadata } from "next";

import { Layout } from "../components/Layout";
import Me from "./me/components/Me";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function IndexPage() {
  return (
    <Layout
      bgImage="https://img.freepik.com/premium-vector/abstract-background-with-modern-style-hexagon-pattern_7505-1722.jpg?w=2000"
      bgRepeat="repeat"
      backgroundPosition="center"
      backgroundRepeat="repeat"
      backgroundSize="333px"
    >
      <Me />
    </Layout>
  );
}
