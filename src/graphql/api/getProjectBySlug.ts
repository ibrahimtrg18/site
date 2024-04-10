import { QUERY_GET_PROJECT_BY_SLUG } from "@/graphql/queries/projectQueries";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseGetProject } from "@/types/response";

export async function getProjectBySlug(slug: string) {
  const data = await getClient().query<ResponseGetProject>({
    query: QUERY_GET_PROJECT_BY_SLUG,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
