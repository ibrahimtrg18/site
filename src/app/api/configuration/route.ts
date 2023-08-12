import { gql } from "@apollo/client";
import { NextResponse } from "next/server";

import { getClient } from "../../../utils/client";

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
    }
  }
`;

export async function GET() {
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

    return NextResponse.json({
      data: {
        configuration,
      },
    });
  }

  return NextResponse.json({
    data: {},
  });
}
