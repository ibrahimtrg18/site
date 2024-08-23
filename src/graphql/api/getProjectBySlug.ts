import {
  GetProjectBySlugDocument,
  GetProjectBySlugQuery,
} from "@/generated/graphql";
import { getClient } from "@/libs/apollo/ssr";

export async function getProjectBySlug(slug: string) {
  const data = await getClient().query<GetProjectBySlugQuery>({
    query: GetProjectBySlugDocument,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
