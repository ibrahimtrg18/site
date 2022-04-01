import React from "react";

import About from "../components/content/About";
import Me from "../components/content/Me";
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
