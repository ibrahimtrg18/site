import { getClient } from "../../libs/getClient";
import { TechnologiesData } from "../../types/Technology";
import { QUERY_GET_ALL_TECHNOLOGIES } from "../queries/technology";

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
