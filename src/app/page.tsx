import { Metadata } from "next";

import Me from "./me/components/Me";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function IndexPage() {
  return <Me />;
}
