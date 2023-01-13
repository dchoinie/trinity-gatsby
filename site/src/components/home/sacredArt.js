import React from "react";
import SectionHeading from "../sectionHeading";
import { faBrush, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../button/button";

const SacredArt = () => {
  return (
    <div className="my-48 max-w-screen-xl mx-auto">
      <SectionHeading
        title="Sacred Art"
        subTitle="But now, O Lord, you are our Father; we are the clay, and you are our potter; we are all the work of your hand"
        icon={faBrush}
      />
      <div className="my-24 flex justify-between gap-12">
        <div className="flex w-1/2">
          <StaticImage
            src="../../images/sacredArt/resurrection.jpg"
            alt="painting"
            className="shadow-lg"
            placeholder="blurred"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <h4 className="text-2xl text-gray-700 tracking-wider mb-4">
            Lorem ipsum dolor sit amet.
          </h4>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum qui
            reprehenderit quis voluptatum dolorum blanditiis fuga debitis
            laboriosam illo maxime deserunt inventore, repudiandae neque
            repellendus quae ducimus eaque numquam aspernatur? Vero modi itaque
            quia nesciunt.
          </p>
          <p className="text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos,
            assumenda repellendus autem minima illo dolorem molestias officia
            deserunt expedita ratione earum?
          </p>
          <div className="self-start">
            <Button
              label="View All Sacred Art"
              link="/sacred-art"
              theme="primary"
              size="large"
              icon={faAngleRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacredArt;
