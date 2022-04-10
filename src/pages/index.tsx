import React from "react";

import About from "../components/Content/About";
import Me from "../components/Content/Me";
import Project from "../components/Content/Project";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Me />
      <About />
      <Project />
    </Layout>
  );
};

export default IndexPage;
