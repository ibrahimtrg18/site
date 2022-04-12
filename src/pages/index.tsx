import React, { useMemo, useRef } from "react";

import About from "../components/Content/About";
import Me from "../components/Content/Me";
import Project from "../components/Content/Project";
import Layout from "../components/Layout";

const IndexPage = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const ResumeRef = useRef<HTMLElement>(null);
  const meRef = useRef<HTMLElement>(null);
  const menus = useMemo(
    () => [
      { name: "Me", ref: meRef },
      { name: "About", ref: aboutRef },
      { name: "Project", ref: projectRef },
      { name: "Resume", ref: ResumeRef },
    ],
    []
  );

  return (
    <Layout navbarMenus={menus}>
      <Me ref={meRef} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
    </Layout>
  );
};

export default IndexPage;
