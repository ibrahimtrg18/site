import { QUERY_GET_ALL_APP } from "@/graphql/queries/appQueries";
import { getClient } from "@/libs/apollo/ssr";
import { ResponseGetApps } from "@/types/response";

export async function getApp() {
  const {
    data: { apps },
  } = await getClient().query<ResponseGetApps>({
    query: QUERY_GET_ALL_APP,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  if (apps.length) {
    const app = apps[0];

    return {
      data: {
        app,
      },
    };
  }

  return {
    data: {
      app: null,
    },
  };
}
