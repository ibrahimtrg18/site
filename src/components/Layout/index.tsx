import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../styles";
import SEO from "../SEO";
import Main from "./Main";
import Navbar from "./Navbar";

library.add(fab, fas, far);

interface Props {
  children: React.ReactNode;
  navbar?: boolean;
  navbarMenus?: Array<any>;
  isScrolled?: boolean;
}

const Layout: FC<Props> = (props) => {
  const { children, navbar, navbarMenus, isScrolled } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      {navbar && <Navbar navbarMenus={navbarMenus} isScrolled={isScrolled} />}
      <Main isScrolled={isScrolled}>{children}</Main>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  navbar: true,
};

export default Layout;
