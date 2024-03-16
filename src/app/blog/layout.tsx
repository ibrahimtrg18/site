import PageTransition from "@/components/PageTransition";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <PageTransition>{children}</PageTransition>;
}
