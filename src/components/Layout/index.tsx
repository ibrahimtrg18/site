import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../styles";
import SEO from "../SEO";
import Main from "./Main";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  navbar?: boolean;
  navbarMenus?: Array<any>;
}

const Layout: FC<Props> = (props) => {
  const { children, navbar, navbarMenus } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      {navbar && <Navbar navbarMenus={navbarMenus} />}
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  navbar: true,
};

export default Layout;
