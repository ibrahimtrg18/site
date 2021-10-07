import React, { useState, useRef, useEffect } from "react";
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

  return (
    <>
      <Navbar ref={navbarContainer} />
      <Main navbarHeight={navbarHeight}>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
