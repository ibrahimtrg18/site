import {
  GetPageDocument,
  GetPageQuery,
  GetPageQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/libs/apollo/ssr";

export async function getPage(variables: GetPageQueryVariables) {
  return await getClient().query<GetPageQuery>({
    query: GetPageDocument,
    variables,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
}
