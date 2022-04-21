import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import About from "../components/Content/About";
import Me from "../components/Content/Me";
import Project from "../components/Content/Project";
import Resume from "../components/Content/Resume";
import Layout from "../components/Layout";

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

  const [isScrolled, setIsScrolled] = useState(false);

  const menus: Array<Menu> = useMemo(
    () => [
      { name: "Me", icon: ["far", "face-smile"], ref: meRef },
      { name: "About", icon: ["far", "address-card"], ref: aboutRef },
      { name: "Project", icon: ["fas", "code"], ref: projectRef },
      { name: "Resume", icon: ["far", "file"], ref: resumeRef },
    ],
    []
  );

  const callbackSetIsScolled = useCallback(setIsScrolled, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.pageYOffset > 0) {
        callbackSetIsScolled(true);
      } else {
        callbackSetIsScolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    scrollListener();

    return () => window.removeEventListener("scroll", scrollListener);
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
