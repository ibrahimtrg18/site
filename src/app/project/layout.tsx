import PageTransition from "../../components/PageTransition";

type ProjectLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return <PageTransition>{children}</PageTransition>;
}
