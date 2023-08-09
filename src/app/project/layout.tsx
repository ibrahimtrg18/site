import PageTransition from "../../components/PageTransition";

type ProjectLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <PageTransition
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
    >
      {children}
    </PageTransition>
  );
}
