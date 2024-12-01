import { Metadata } from "next";

import { SITE_URL } from "@/constants";
import { getPage } from "@/graphql/api/getPage";
import resolverPath from "@/libs/puck/resolver-path";

import Client from "./client";

export async function generateMetadata({
  params,
}: {
  params: { framework: string; uuid: string; path: string[] };
}): Promise<Metadata> {
  const { isEdit, path } = resolverPath(params.path);

  const { data: pageData } = await getPage({ path: "/" });
  const page = pageData?.page;

  if (isEdit) {
    return {
      title: "Editing: " + path,
      description: page?.config?.description,
      metadataBase: new URL(SITE_URL),
    };
  }

  return {
    title: `${page?.config?.root?.props.title}`,
    description: page?.config?.root?.props.description,
    metadataBase: new URL(SITE_URL),
  };
}

export default async function Page({
  params,
}: {
  params: { framework: string; uuid: string; path: string[] };
}) {
  const { isEdit, path } = resolverPath(params.path);

  return <Client isEdit={isEdit} path={path} />;
}
