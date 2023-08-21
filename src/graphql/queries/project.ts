import { gql } from "@apollo/client";

import { getClient } from "../../utils/client";
import { IAsset, IRichText } from "../../utils/graphql";

export type IProject = {
  id: string;
  title: string;
  url: string;
  experience: number;
  type: string;
  description: IRichText;
  markdownFile: IAsset;
  media: Array<
    IAsset & {
      small: string;
    }
  >;
};

export type IProjects = Array<IProject>;

export type IProjectsData = {
  projects: IProjects;
};

const QUERY_GET_ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      title
      url
      type
      markdownFile {
        url
      }
      media {
        id
        small: url(
          transformation: { image: { resize: { height: 400, width: 400 } } }
        )
        url
      }
      description {
        html
        markdown
        text
        raw
      }
    }
  }
`;

export async function getProjects() {
  const data = await getClient().query<IProjectsData>({
    query: QUERY_GET_ALL_PROJECTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
