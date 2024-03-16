import { QUERY_GET_ALL_TECHNOLOGIES } from "@/graphql/queries/technology";
import { getClient } from "@/libs/apollo/ssr";
import { TechnologiesData } from "@/types/Technology";

export async function getTechnologies() {
  const data = await getClient().query<TechnologiesData>({
    query: QUERY_GET_ALL_TECHNOLOGIES,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
