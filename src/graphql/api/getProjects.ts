import { QUERY_GET_ALL_PROJECTS } from "@/graphql/queries/project";
import { getClient } from "@/libs/apollo/ssr";
import { ProjectsData } from "@/types/Project";

export async function getProjects() {
  const data = await getClient().query<ProjectsData>({
    query: QUERY_GET_ALL_PROJECTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return data;
}
