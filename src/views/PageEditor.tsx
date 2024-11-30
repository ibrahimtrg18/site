"use client";

import { Data, DefaultComponentProps } from "@measured/puck";

import {
  GetPageQuery,
  usePublishPageMutation,
  useUpdatePageMutation,
} from "@/generated/graphql";
import { Editor } from "@/libs/puck";

type PageEditorProps = {
  page: GetPageQuery["page"];
};

export const PageEditor = (props: PageEditorProps) => {
  const { page } = props;
  const [updatePage] = useUpdatePageMutation();
  const [publishPage] = usePublishPageMutation();

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

  return <Editor data={page?.config || {}} onPublish={onPublish} />;
};
