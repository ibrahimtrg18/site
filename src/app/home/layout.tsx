import PageTransition from "@/components/PageTransition";

type MeLayoutProps = {
  children: React.ReactNode;
};

export default function MeLayout({ children }: MeLayoutProps) {
  return <PageTransition>{children}</PageTransition>;
}
