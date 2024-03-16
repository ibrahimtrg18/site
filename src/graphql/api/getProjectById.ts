import { QUERY_GET_PROJECT_BY_ID } from "@/graphql/queries/project";
import { getClient } from "@/libs/apollo/ssr";
import { ProjectData } from "@/types/Project";

export async function getProjectById(projectId: string) {
  const data = await getClient().query<ProjectData>({
    query: QUERY_GET_PROJECT_BY_ID,
    variables: { projectId },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
