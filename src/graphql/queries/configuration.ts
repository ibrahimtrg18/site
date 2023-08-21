import { gql } from "@apollo/client";

import { getClient } from "../../utils/client";

interface About {
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
  lat: null | number;
  lng: null | number;
  location: string;
}

interface Maintenance {
  title: string;
  text: string;
  farewell: string;
  signature: string;
}

interface MenuItem {
  id: string;
  label: string;
  pathname: string;
  slug: string;
  href: string;
}

export type IConfiguration = {
  id: string;
  about: Partial<About>;
  maintenance: Partial<Maintenance>;
  menu: Partial<MenuItem>[];
};

export type IConfigurations = Array<IConfiguration>;

export type IConfigurationsData = {
  configurations: IConfigurations;
};

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

const defaultConfiguration = {
  id: "",
  about: {
    firstName: "",
    lastName: "",
    fullName: "",
    shortName: "",
    initialName: "",
    email: "",
    phoneNumber: "",
    whoiam: "",
    greeting: "",
    description: {
      text: "",
    },
    cv: "",
    lat: null,
    lng: null,
    location: "",
  },
  maintenance: {
    title: "",
    text: "",
    farewell: "",
    signature: "",
  },
  menu: [],
};

export async function getConfiguration() {
  const {
    data: { configurations },
  } = await getClient().query<IConfigurationsData>({
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
      configuration: defaultConfiguration,
    },
  };
}
