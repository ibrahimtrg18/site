import type { NextPage } from "next";

import { Layout } from "../components/Layout";
import Me from "./layouts/Me";

const Home: NextPage = () => {
  return (
    <Layout>
      <Me />
    </Layout>
  );
};

export default Home;
