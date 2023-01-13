import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import Seo from "../components/seo";

const Bulletins = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="Bulletins" />
      <div className="max-w-screen-xl mx-6 lg:mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Bulletins" />
        <p>Page coming soon...</p>
      </div>
    </Layout>
  );
};

export default Bulletins;
