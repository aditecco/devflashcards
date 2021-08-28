/* ---------------------------------
Home
--------------------------------- */

import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const Home = () => {
  return (
    <Layout>
      <div>TODO Choose a deck</div>
      {/* TODO should be: deck/<deck name or ID>/ */}
      <Link to={"/deck"}>Go to default deck</Link>
    </Layout>
  );
};

export default Home;
