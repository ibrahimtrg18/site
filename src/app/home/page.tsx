import { Metadata } from "next";

import Me from "./components/Me";

export const metadata: Metadata = {
  title: "Me | Ibrahim Tarigan ",
  description: "Me Page",
};

export default function MePage() {
  return <Me />;
}
