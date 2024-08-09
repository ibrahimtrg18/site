import { gql } from "@apollo/client";

export const QUERY_GET_ALL_APP = gql`
  query GetApps {
    apps {
      id
      avatar {
        url
      }
      fullname
      nickname
      email
      phoneNumber
      about {
        markdown
      }
      greeting {
        markdown
      }
      menu {
        label
        pathname
        slug
        href
      }
      socials: social {
        label
        link
        icon
      }
      technologies: technology(first: 100) {
        id
        label
        link
        media {
          id
          url
        }
      }
    }
  }
`;
