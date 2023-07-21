import { Providers } from "../components/Providers";

type RootLayoutProps = React.HTMLProps<HTMLElement>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
