import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionHeading = ({ title, subTitle, icon }) => {
  return (
    <div className="mx-6 lg:mx-0 flex flex-col items-center text-center">
      <FontAwesomeIcon icon={icon} className="text-primary text-2xl" />
      <h2 className="my-1 text-xl lg:text-3xl">{title}</h2>
      <h4 className="text-sm italic text-secondary max-w-5xl mx-auto">
        {subTitle}
      </h4>
    </div>
  );
};

export default SectionHeading;
