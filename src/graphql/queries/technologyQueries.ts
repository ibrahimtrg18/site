import { gql } from "@apollo/client";

export const QUERY_GET_ALL_TECHNOLOGIES = gql`
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
