import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../config/styled-components";
import SEO from "../SEO";
import Main from "./Main";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      <Navbar />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
