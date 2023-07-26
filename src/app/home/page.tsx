import { Metadata } from "next";

import { get } from "../../utils/fetch";
import { ResponseGetMe } from "../api/me/route";
import Me from "./components/Me";

export const metadata: Metadata = {
  title: "Me | Ibrahim Tarigan ",
  description: "Me Page",
};

export default async function MePage() {
  const { data } = await get<ResponseGetMe>("/api/me");

  return <Me {...data} />;
}
