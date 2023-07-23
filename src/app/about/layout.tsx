import { Layout } from "../../components/Layout";

type AboutLayoutProps = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <Layout>{children}</Layout>;
}
