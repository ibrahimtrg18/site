import { QUERY_GET_PROJECT_BY_ID } from "@/graphql/queries/projectQueries";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseGetProject } from "@/types/response";

export async function getProjectById(projectId: string) {
  const data = await getClient().query<ResponseGetProject>({
    query: QUERY_GET_PROJECT_BY_ID,
    variables: { projectId },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
