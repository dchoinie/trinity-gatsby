import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/home/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";

const WorshipSchedule = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Worship Schedule" />
      </div>
    </Layout>
  );
};

export default WorshipSchedule;
