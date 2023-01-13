import React from "react";
import SectionHeading from "../sectionHeading";
import { faChurch, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../button/button";

const About = () => {
  return (
    <div className="my-48 max-w-screen-sm lg:max-w-screen-xl mx-6 lg:mx-auto">
      <div className="mb-24">
        <SectionHeading
          title="About Trinity Evangelical Lutheran Church"
          subTitle="Through Him we are called out of darkness into God&apos;s marvelous light"
          icon={faChurch}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-12">
        <div className="flex flex-col w-full lg:w-1/2">
          <p>
            Trinity Evangelical Lutheran Church is a congregation gathered by
            the Holy Spirit around our Lord&apos;s saving Word and Sacraments.
            At the center of our life together is Jesus Christ, the Lamb of God
            who takes away the sin of the world.
          </p>
          <hr className="my-3 border-gray-200 w-2/3" />
          <p className="mb-4">
            We joyfully believe, teach, and confess the one true faith as it is
            revealed by the Triune God in Holy Scripture and faithfully
            confessed in the Book of Concord. Our mission is to serve the
            surrounding community with the saving Gospel of our Lord Jesus
            Christ. To accomplish this, we are committed to:
          </p>
          <ul className="list-disc ml-12 text-gray-600 italic">
            <li>the pure preaching of God&apos;s holy Word</li>
            <li>the right administration of Christ&apos;s holy Sacraments</li>
            <li>the faithful teaching of the Christian faith</li>
            <li>
              the reverent, liturgical worship of the evangelical Lutheran
              Church
            </li>
          </ul>
          <hr className="my-3 border-gray-200 w-2/3" />
          <p className="mb-4">
            We invite you to join us and grow in the grace and knowledge of
            Jesus Christ our Savior. Through Him we are called out of darkness
            into God&apos;s marvelous light.
          </p>
          <div className="self-start">
            <Button
              label="Who We Are"
              theme="primary"
              link="/who-we-are"
              icon={faAngleRight}
              size="large"
            />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <StaticImage
            src="../../images/exterior.jpg"
            alt="Church Exterior"
            className="rounded shadow-lg"
            placeholder="blurred"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
