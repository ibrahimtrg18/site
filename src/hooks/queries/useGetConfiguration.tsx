import { useQuery } from "@apollo/client";

import { QUERY_GET_ALL_CONFIGURATION } from "../../graphql/queries/configuration";
import { ConfigurationsData } from "../../types/Configuration";

export const useGetConfiguration = () => {
  const { data } = useQuery<ConfigurationsData>(QUERY_GET_ALL_CONFIGURATION);

  const configurations = data?.configurations || [];

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
};
