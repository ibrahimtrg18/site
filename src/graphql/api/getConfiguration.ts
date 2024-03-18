import { QUERY_GET_ALL_CONFIGURATION } from "@/graphql/queries/configurationQueries";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseGetConfigurations } from "@/types/response";

export async function getConfiguration() {
  const {
    data: { configurations },
  } = await getClient().query<ResponseGetConfigurations>({
    query: QUERY_GET_ALL_CONFIGURATION,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  if (configurations.length) {
    const configuration = configurations[0];

    return {
      data: {
        configuration,
      },
    };
  }

  return {
    data: {
      configuration: null,
    },
  };
}
