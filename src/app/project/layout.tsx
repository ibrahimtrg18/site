import PageTransition from "../../components/PageTransition";
import { ProjectProvider } from "../../contexts/ProjectContext/ProjectContext";
import { getProjects } from "../../graphql/api/getProjects";

type ProjectLayoutProps = {
  children: React.ReactNode;
};

export default async function ProjectLayout({ children }: ProjectLayoutProps) {
  const {
    data: { projects },
  } = await getProjects();

  return (
    <ProjectProvider projects={projects}>
      <PageTransition>{children}</PageTransition>
    </ProjectProvider>
  );
}
