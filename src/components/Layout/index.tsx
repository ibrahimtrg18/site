import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../config/styled-components";
import SEO from "../SEO";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
    </ThemeProvider>
  );
};

export default Layout;
