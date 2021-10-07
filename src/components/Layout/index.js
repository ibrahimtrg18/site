import React, { useState, useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./style.scss";

const Layout = props => {
  const { children } = props;
  const navbarContainer = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(
    navbarContainer &&
      navbarContainer.current &&
      navbarContainer.current.clientHeight
  );

  useEffect(() => {
    if (navbarContainer && navbarContainer.current) {
      setNavbarHeight(navbarContainer.current.clientHeight);
    }
  }, [navbarContainer]);

  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `);

  const { title, copyright } = data.site.siteMetadata;

  return (
    <>
      <Navbar ref={navbarContainer} title={title} />
      <Main navbarHeight={navbarHeight}>{children}</Main>
      <Footer copyright={copyright} />
    </>
  );
};

export default Layout;
