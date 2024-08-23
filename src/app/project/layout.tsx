import { ProjectProvider } from "@/contexts/ProjectContext/ProjectContext";
import { Project } from "@/generated/graphql";
import { getProjects } from "@/graphql/api/getProjects";

type ProjectLayoutProps = {
  children: React.ReactNode;
};

export default async function ProjectLayout({ children }: ProjectLayoutProps) {
  const { data } = await getProjects();
  const projects = data?.projects as Project[];

  return <ProjectProvider projects={projects}>{children}</ProjectProvider>;
}
