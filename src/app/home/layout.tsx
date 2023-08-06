import PageTransition from "../../components/PageTransition";

type MeLayoutProps = {
  children: React.ReactNode;
};

export default function MeLayout({ children }: MeLayoutProps) {
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
