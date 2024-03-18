import { QUERY_GET_ALL_PROJECTS } from "@/graphql/queries/projectQueries";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseGetProjects } from "@/types/response";

export async function getProjects() {
  const data = await getClient().query<ResponseGetProjects>({
    query: QUERY_GET_ALL_PROJECTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
