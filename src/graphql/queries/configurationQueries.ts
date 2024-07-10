import { gql } from "@apollo/client";

// TODO: fix this
export const QUERY_GET_ALL_CONFIGURATION = gql`
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
        whoami
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
        description {
          html
          markdown
          text
          raw
        }
      }
      avatar {
        id
        url
      }
    }
  }
`;
