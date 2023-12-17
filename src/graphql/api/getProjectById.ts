import { getClient } from "../../libs/getClient";
import { QUERY_GET_PROJECT_BY_ID } from "../queries/project";
import { ProjectData } from "../../types/Project";

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
