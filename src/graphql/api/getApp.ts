import { QUERY_GET_ALL_APP } from "@/graphql/queries/appQueries";
import { getClient } from "@/libs/apollo/ssr";
import { GetAppsResponse } from "@/types/Hygraph/models/App";

export async function getApp() {
  const { data, error, loading } = await getClient().query<GetAppsResponse>({
    query: QUERY_GET_ALL_APP,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return { data, error, loading };
}
