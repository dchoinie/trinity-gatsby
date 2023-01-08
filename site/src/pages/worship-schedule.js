import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import Card from "../components/home/serviceTimes/card";
import { faCross, faBookBible } from "@fortawesome/free-solid-svg-icons";

const WorshipSchedule = ({ location }) => {
  const { pathname } = location;

  const divineServiceContent = (
    <p className="text-gray-600 text-sm text-center">Sundays | 9:00 AM</p>
  );

  const bibleStudyContent = (
    <div className="flex flex-col items-center text-center">
      <p className="text-gray-600 text-sm mb-4">Sundays | 10:15 AM</p>
      <p className="text-gray-600 text-sm">Tuesdays | 3:00 PM</p>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading
          title="Worship Schedule"
          subTitle="Please join us for worship on Sunday mornings"
        />
        <div className="my-24 grid grid-cols-2 gap-24 justify-center">
          <Card
            title="Divine Service"
            icon={faCross}
            buttonText="What To Expect"
            buttonLink="/what-to-expect"
            content={divineServiceContent}
          />
          <Card
            title="Adult Bible Class & Sunday School"
            icon={faBookBible}
            buttonText="What We Believe"
            buttonLink="/what-we-believe"
            content={bibleStudyContent}
          />
        </div>
      </div>
    </Layout>
  );
};

export default WorshipSchedule;
