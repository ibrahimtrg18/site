import { gql } from "@apollo/client";

export const QUERY_GET_ALL_APP = gql`
  query App {
    apps {
      menu {
        id
        label
        pathname
        slug
        href
      }
      socials: social {
        id
        label
        link
        icon
        stage
      }
    }
  }
`;
