import { Layout } from "../../components/Layout";

type AboutLayoutProps = React.HTMLProps<HTMLElement>;

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <Layout>{children}</Layout>;
}
