import { gql } from "@apollo/client";

export const QUERY_GET_ALL_PROJECTS = gql`
  query Projects {
    projects(first: 100, orderBy: title_ASC) {
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
