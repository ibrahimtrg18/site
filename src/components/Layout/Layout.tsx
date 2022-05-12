import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC, useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../styles";
import SEO from "../SEO";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

library.add(fab, fas, far);

interface Props {
  children: React.ReactNode;
  navbar?: boolean;
  navbarMenus?: Array<any>;
  pageYOffset?: number;
}

const Layout: FC<Props> = (props) => {
  const { children, navbar, navbarMenus, pageYOffset } = props;
  const data = useStaticQuery(query);
  const files: Array<any> = data.allFile.edges;

  const image = useMemo(
    () =>
      files.find(
        (file) => `${file.node.name}.${file.node.extension}` === "picture.png"
      ),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO image={image.node.publicURL} />
      {navbar && <Navbar navbarMenus={navbarMenus} pageYOffset={pageYOffset} />}
      <Main isScrolled={Boolean(pageYOffset)}>{children}</Main>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  navbar: true,
};

const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          extension
          publicURL
        }
      }
    }
  }
`;

export default Layout;
