import React, { useEffect, useMemo, useRef, useState } from "react";

import About from "../components/Content/About";
import Me from "../components/Content/Me";
import Project from "../components/Content/Project";
import Resume from "../components/Content/Resume";
import Layout from "../components/Layout";

const IndexPage = () => {
  const meRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const menus = useMemo(
    () => [
      { name: "Me", icon: "AtSign", ref: meRef },
      { name: "About", icon: "User", ref: aboutRef },
      { name: "Project", icon: "Code", ref: projectRef },
      { name: "Resume", icon: "Award", ref: resumeRef },
    ],
    []
  );

  useEffect(() => {
    const scrollListener = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    scrollListener();
  }, []);

  return (
    <Layout navbarMenus={menus} isScrolled={isScrolled}>
      <Me ref={meRef} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Resume ref={resumeRef} />
    </Layout>
  );
};

export default IndexPage;
