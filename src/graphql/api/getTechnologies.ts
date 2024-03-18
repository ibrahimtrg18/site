import { QUERY_GET_ALL_TECHNOLOGIES } from "@/graphql/queries/technologyQueries";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseGetTechnologies } from "@/types/response";

export async function getTechnologies() {
  const data = await getClient().query<ResponseGetTechnologies>({
    query: QUERY_GET_ALL_TECHNOLOGIES,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
