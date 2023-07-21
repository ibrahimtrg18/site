import { Elegance } from "@ibrahimtrg18/elegance";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Elegance>
      <Component {...pageProps} />
    </Elegance>
  );
}

export default MyApp;
