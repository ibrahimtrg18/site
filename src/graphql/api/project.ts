import { getClient } from "../../libs/getClient";
import { ProjectsData } from "../../types/Project";
import { QUERY_GET_ALL_PROJECTS } from "../queries/project";

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
