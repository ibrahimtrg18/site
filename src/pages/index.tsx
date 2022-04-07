import React from "react";

import About from "../components/Content/About";
import Me from "../components/Content/Me";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Me />
      <About />
    </Layout>
  );
};

export default IndexPage;
