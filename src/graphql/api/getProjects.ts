import { GetProjectsDocument, GetProjectsQuery } from "@/generated/graphql";
import { getClient } from "@/libs/apollo/ssr";

export async function getProjects() {
  const data = await getClient().query<GetProjectsQuery>({
    query: GetProjectsDocument,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
