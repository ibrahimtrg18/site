import React, { useState, useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
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

  const [positionScroll, setPositionScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", onListenScroll);
    return () => document.removeEventListener("scroll", onListenScroll);
  }, []);

  const onListenScroll = () => {
    setPositionScroll(window.pageYOffset);
  };

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
          metaDescription
        }
      }
    }
  `);

  const {
    title,
    copyright,
    metaDescription,
    ogSiteName,
    ogTitle,
    ogDescription,
  } = data.site.siteMetadata;

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={title}
        meta={[
          {
            name: `title`,
            content: title,
          },
          { name: "description", content: metaDescription },
          {
            property: `og:site_name`,
            content: ogSiteName,
          },
          { property: "og:title", content: ogTitle || title },
          {
            property: "og:description",
            content: ogDescription || metaDescription,
          },
        ]}
      />
      <Navbar
        ref={navbarContainer}
        title={title}
        positionScroll={positionScroll}
      />
      <Main navbarHeight={navbarHeight} positionScroll={positionScroll}>
        {children}
      </Main>
      <Footer copyright={copyright} />
    </>
  );
};

export default Layout;
