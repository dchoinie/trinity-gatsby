import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/home/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";

const Catechesis = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Catechesis" />
      </div>
    </Layout>
  );
};

export default Catechesis;
