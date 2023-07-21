import { ChakraProvider } from "@chakra-ui/react";
// import { Elegance } from "@ibrahimtrg18/elegance";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Elegance>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    // </Elegance>
  );
}

export default MyApp;
