"use client";

import { useMemo } from "react";
import { redirect } from "next/navigation";
import { Spinner } from "@chakra-ui/react";
import { Data, DefaultComponentProps, Render } from "@measured/puck";

import {
  useGetPageQuery,
  usePublishPageMutation,
  useUpdatePageMutation,
} from "@/generated/graphql";
import { config, Editor } from "@/libs/puck";

type ClientProps = {
  path: string;
  isEdit: boolean;
  isPreview: boolean;
};

/**
 * @param {Object} props Props defined in the page component
 * @param {string} props.path The path of the page after slice/remove "/edit" in path (e.g. /edit to /)
 * @param {boolean} props.isEdit If the page is in edit mode
 */
const Client = ({ path, isEdit, isPreview }: ClientProps) => {
  const { data, loading } = useGetPageQuery({ variables: { path } });
  const [updatePage] = useUpdatePageMutation();
  const [publishPage] = usePublishPageMutation();

  const page = useMemo(() => data?.page, [data]);

  const onPublish = async (config: Data<DefaultComponentProps>) => {
    // eslint-disable-next-line no-console
    console.log(config);

    await updatePage({
      variables: {
        id: String(page?.id),
        name: String(page?.name),
        path: String(page?.path),
        config: config,
      },
    });

    await publishPage({ variables: { path: String(page?.path) } });
  };

  if (loading) {
    return <Spinner />;
  }

  if (isEdit) {
    return <Editor path={path} data={page?.config} onPublish={onPublish} />;
  }

  if (isPreview) {
    return (
      <Editor isPreview path={path} data={page?.config} onPublish={onPublish} />
    );
  }

  if (page?.config) {
    return <Render config={config} data={page?.config} />;
  }

  return redirect(path);
};

export default Client;
