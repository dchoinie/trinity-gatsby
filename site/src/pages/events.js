import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import Seo from "../components/seo";

const Events = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="Events" />
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Events" />
        <iframe
          title="Trinity Evangelical Lutheran Church Calendar"
          src="https://calendar.google.com/calendar/embed?src=ihfb8203lkp31n7038imqlpap8%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: "0", width: "100%", height: "90vh" }}
          frameBorder={0}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Events;
