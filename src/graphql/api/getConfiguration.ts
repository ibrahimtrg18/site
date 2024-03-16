import { QUERY_GET_ALL_CONFIGURATION } from "@/graphql/queries/configuration";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseConfigurations } from "@/types/Configuration";

export async function getConfiguration() {
  const {
    data: { configurations },
  } = await getClient().query<ResponseConfigurations>({
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
