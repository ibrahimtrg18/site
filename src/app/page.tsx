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
      bgImage="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/384baf102600931.5f3a87daefd56.jpg"
      bgRepeat="no-repeat"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Me />
    </Layout>
  );
}
