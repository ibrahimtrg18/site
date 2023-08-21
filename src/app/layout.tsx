import { Layout } from "../components/Layout";
import { Providers } from "../components/Providers";
import { getConfiguration } from "../graphql/queries/configuration";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const {
    data: { configuration },
  } = await getConfiguration();

  return (
    <html lang="en">
      <body style={{ overflowY: "auto" }}>
        <Providers configuration={configuration}>
          <Layout
            bgRepeat="repeat"
            backgroundPosition="center"
            backgroundRepeat="repeat"
            backgroundSize="333px"
          >
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
