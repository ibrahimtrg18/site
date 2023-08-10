import { Layout } from "../components/Layout";
import { Providers } from "../components/Providers";
import { axios } from "../utils/axios";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const { data: configuration } = await axios.get("/api/configuration");
  const LAYOUT_IMAGE_URL =
    "https://img.freepik.com/premium-vector/abstract-background-with-modern-style-hexagon-pattern_7505-1722.jpg?w=2000";

  return (
    <html lang="en">
      <body style={{ overflowY: "auto" }}>
        <Providers configuration={configuration}>
          <Layout
            bgImage={LAYOUT_IMAGE_URL}
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
