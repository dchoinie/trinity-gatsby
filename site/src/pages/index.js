import * as React from "react";
import Hero from "../components/home/hero/hero";
import Layout from "../components/layout/layout";
import About from "../components/home/about";
import ServiceTimes from "../components/home/serviceTimes/serviceTimes";
import SacredArt from "../components/home/sacredArt";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <About />
      <ServiceTimes />
      <SacredArt />
    </Layout>
  );
};

export default IndexPage;
