import { gql } from "@apollo/client";

import { getClient } from "../utils/client";

export type IAbout = {
  firstName: string;
  lastName: string;
  fullName: string;
  shortName: string;
  initialName: string;
  email: string;
  phoneNumber: string;
  whoiam: string;
  greeting: string;
  description: {
    text: string;
  };
  cv: string;
  lat: string;
  lng: string;
  location: string;
};

export type IConfiguration = {
  about: IAbout;
};

export type IConfigurations = Array<IConfiguration>;

export type IConfigurationsData = {
  configurations: IConfigurations;
};

const query = gql`
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
    }
  }
`;

export async function getAbout() {
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
    const { about } = configurations[0];

    return {
      data: {
        about,
      },
    };
  }

  return { data: { about: {} } };
}
