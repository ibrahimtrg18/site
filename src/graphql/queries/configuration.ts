import { gql } from "@apollo/client";

import { ConfigurationsData } from "../../types/Configuration";
import { getClient } from "../../utils/client";

const QUERY_GET_ALL_CONFIGURATION = gql`
  query Configuration {
    configurations {
      id
      about {
        firstName
        lastName
        fullName
        shortName
        initialName
        email
        phoneNumber
        whoiam
        greeting
        description {
          text
        }
        cv
        lat
        lng
        location
      }
      maintenance {
        title
        text
        farewell
        signature
      }
      menu {
        id
        label
        pathname
        slug
        href
      }
    }
  }
`;

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
