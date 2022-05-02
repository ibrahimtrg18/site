import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import React, { useCallback, useEffect, useRef, useState } from "react";

import About from "../components/Content/About/About";
import Contact from "../components/Content/Contact/Contact";
import Me from "../components/Content/Me/Me";
import Project from "../components/Content/Project/Project";
import Resume from "../components/Content/Resume/Resume";
import Layout from "../components/Layout/Layout";

interface Menu {
  name: string;
  icon: [IconPrefix, IconName];
  ref: React.RefObject<HTMLElement>;
}

const IndexPage = () => {
  const meRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [pageYOffset, setPageYOffset] = useState(0);

  const [menus, setMenus] = useState<Array<Menu>>([
    { name: "Me", icon: ["far", "face-smile"], ref: meRef },
    { name: "About", icon: ["far", "address-card"], ref: aboutRef },
    { name: "Project", icon: ["fas", "code"], ref: projectRef },
    { name: "Resume", icon: ["far", "file"], ref: resumeRef },
    { name: "Contact", icon: ["far", "address-book"], ref: contactRef },
  ]);

  const callbackSetIsScolled = useCallback(setPageYOffset, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.pageYOffset > 0) {
        callbackSetIsScolled(window.pageYOffset);
      } else {
        callbackSetIsScolled(window.pageYOffset);
      }
    };

    window.addEventListener("scroll", scrollListener);
    scrollListener();

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    setMenus([
      { name: "Me", icon: ["far", "face-smile"], ref: meRef },
      { name: "About", icon: ["far", "address-card"], ref: aboutRef },
      { name: "Project", icon: ["fas", "code"], ref: projectRef },
      { name: "Resume", icon: ["far", "file"], ref: resumeRef },
      { name: "Contact", icon: ["far", "address-book"], ref: contactRef },
    ]);
  }, [meRef, aboutRef, projectRef, resumeRef, contactRef]);

  return (
    <Layout navbarMenus={menus} pageYOffset={pageYOffset}>
      <Me ref={meRef} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Resume ref={resumeRef} />
      <Contact ref={contactRef} />
    </Layout>
  );
};

export default IndexPage;
