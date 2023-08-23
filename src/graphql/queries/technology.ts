import { gql } from "@apollo/client";

import { getClient } from "../../utils/client";
import { IAsset } from "../../utils/graphql";

export type ITechnology = {
  id: number;
  label: string;
  firstUse: string;
  experience: number;
  link: string;
  media: IAsset;
};

export type ITechnologies = Array<ITechnology>;

export type ITechnologiesData = {
  technologies: ITechnologies;
};

const QUERY_GET_ALL_TECHNOLOGIES = gql`
  query Technologies {
    technologies(first: 100, orderBy: label_ASC) {
      id
      label
      experience
      firstUse
      link
      media {
        id
        url
      }
    }
  }
`;

export async function getTechnologies() {
  const data = await getClient().query<ITechnologiesData>({
    query: QUERY_GET_ALL_TECHNOLOGIES,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
