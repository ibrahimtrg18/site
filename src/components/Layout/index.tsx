import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../config/styled-components";
import SEO from "../SEO";
import Main from "./Main";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  navbar?: boolean;
}

const Layout: FC<Props> = (props) => {
  const { children, navbar } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      {navbar && <Navbar />}
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  navbar: true,
};

export default Layout;
