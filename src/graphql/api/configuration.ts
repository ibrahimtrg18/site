import { getClient } from "../../libs/getClient";
import { QUERY_GET_ALL_CONFIGURATION } from "../queries/configuration";
import { ConfigurationsData } from "../../types/Configuration";

export async function getConfiguration() {
  const {
    data: { configurations },
  } = await getClient().query<ConfigurationsData>({
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
