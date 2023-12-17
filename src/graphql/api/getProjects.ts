import { getClient } from "../../libs/getClient";
import { QUERY_GET_ALL_PROJECTS } from "../queries/project";
import { ProjectsData } from "../../types/Project";

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
