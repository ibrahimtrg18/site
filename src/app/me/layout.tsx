import { Layout } from "../../components/Layout";

type MeLayoutProps = React.HTMLProps<HTMLElement>;

export default function MeLayout({ children }: MeLayoutProps) {
  return <Layout>{children}</Layout>;
}
