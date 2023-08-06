import { Layout } from "../components/Layout";
import { Providers } from "../components/Providers";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout
            bgImage="https://img.freepik.com/premium-vector/abstract-background-with-modern-style-hexagon-pattern_7505-1722.jpg?w=2000"
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
