import React from "react";
import SectionHeading from "../../sectionHeading";
import {
  faClock,
  faCross,
  faBookBible,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

export const ServiceTimes = () => {
  const specialServicesText = (
    <p className="text-gray-600 text-sm">
      Additional opportunities to hear God&apos;s Word and receive the
      Lord&apos;s Supper are offered during the seasons of Advent and Lent.
      Please check our church calendar for the dates and times of these
      services.
    </p>
  );

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
    <div className="my-48 max-w-screen-xl mx-auto">
      <SectionHeading
        title="Service Times"
        subTitle="We invite you to join us and grow in the grace and knowledge of Jesus Christ our Savior."
        icon={faClock}
      />
      <div className="flex flex-col lg:flex-row justify-between gap-12 mt-12 mx-6 lg:mx-0">
        <div className="w-full lg:w-1/3">
          <Card
            title="Divine Service"
            icon={faCross}
            buttonText="What To Expect"
            buttonLink="/what-to-expect"
            content={divineServiceContent}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <Card
            title="Adult Bible Class & Sunday School"
            icon={faBookBible}
            buttonText="What We Believe"
            buttonLink="/what-we-believe"
            content={bibleStudyContent}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <Card
            title="Special Services"
            icon={faCalendarPlus}
            buttonText="Events"
            buttonLink="/events"
            content={specialServicesText}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTimes;
