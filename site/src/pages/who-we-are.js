import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import WhoWeAreComponent from "../components/whoWeAre";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button/button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const WhoWeAre = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading
          title="Who We Are"
          subTitle="Our Name Says A Lot About Us"
        />
        <div className="grid grid-cols-2 gap-12 my-24">
          <div>
            <WhoWeAreComponent
              title="Trinity"
              description="We believe in and worship the God of the Bible: God the Father, Son, and Holy Spirit"
            />
          </div>
          <div>
            <WhoWeAreComponent
              title="Evangelical"
              description="We keep Jesus and His Gospel of forgiveness, life, and salvation at our center"
            />
          </div>
          <div>
            <WhoWeAreComponent
              title="Lutheran"
              description="Our faith and practice are guided by the Lutheran Confessions and are distinctly Lutheran"
            />
          </div>
          <div>
            <WhoWeAreComponent
              title="Church"
              description="We are a congregation of The Lutheran Church-Missouri Synod and a part of the one holy Christian and apostolic Church"
            />
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col w-1/2">
            <p className="text-gray-600">
              Trinity Evangelical Lutheran Church has been proclaming the Gospel
              of the death and resurrection of Jesus to the people of Waterville
              and the surrounding communities since 1909. We are an imperfect
              group of sinners gathered around our shared confession of Jesus
              and His Gospel.
            </p>
            <hr className="my-6 border-gray-200 w-2/3" />
            <p className="text-gray-600 mb-6">
              We are formed and shaped by the Holy Scriptures. And we worship
              according to the historic liturgy of the Church. With the help of
              God, we intend to bear faithful witness to Jesus, to show His
              mercy to all, and to live our life together in His Church until He
              comes again in glory on the Last Day.
            </p>
            <div className="self-start">
              <Button
                label="What We Believe"
                link="/what-we-believe"
                theme="primary"
                size="large"
                icon={faAngleRight}
              />
            </div>
          </div>
          <div className="flex w-1/2">
            <StaticImage
              src="../images/aisle.jpg"
              alt="aisle"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
