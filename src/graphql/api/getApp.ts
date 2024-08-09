import { GetAppsDocument, GetAppsQuery } from "@/generated/graphql";
import { getClient } from "@/libs/apollo/ssr";

export async function getApps() {
  const { data, error, loading } = await getClient().query<GetAppsQuery>({
    query: GetAppsDocument,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return { data, error, loading };
}
