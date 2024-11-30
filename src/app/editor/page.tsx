import { getPage } from "@/graphql/api/getPage";
import { PageEditor } from "@/views/PageEditor";

export default async function EditorPage() {
  const { data: pageData } = await getPage({ path: "/" });

  return <PageEditor page={pageData.page} />;
}
