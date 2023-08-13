import { Background } from "../components/Background";
import { Layout } from "../components/Layout";
import { Providers } from "../components/Providers";
import { getConfiguration } from "../gql/configuration";

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
          {typeof window !== "undefined" && <Background />}
        </Providers>
      </body>
    </html>
  );
}
