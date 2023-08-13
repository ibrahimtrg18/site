import { gql } from "@apollo/client";

import { getClient } from "../utils/client";
import { IRichText } from "../utils/graphql";

export type IProject = {
  id: number;
  title: string;
  url: string;
  experience: number;
  type: string;
  description: IRichText;
};

export type IProjects = Array<IProject>;

export type IProjectsData = {
  projects: IProjects;
};

const query = gql`
  query Projects {
    projects(first: 100) {
      id
      title
      url
      type
      description {
        html
      }
    }
  }
`;

export async function getProjects() {
  const data = await getClient().query<IProjectsData>({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
