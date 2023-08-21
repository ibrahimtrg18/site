import { gql } from "@apollo/client";

import { getClient } from "../utils/client";

export type IConfiguration = {
  maintenance: {
    title?: string;
    text?: string;
    farewell?: string;
    signature?: string;
  };
};

export type IConfigurations = Array<IConfiguration>;

export type IConfigurationsData = {
  configurations: IConfigurations;
};

const query = gql`
  query Configuration {
    configurations {
      id
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
  } = await getClient().query<IConfigurationsData>({
    query,
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
      configuration: {},
    },
  };
}
