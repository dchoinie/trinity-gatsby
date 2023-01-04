import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionHeading = ({ title, subTitle, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <FontAwesomeIcon icon={icon} className="text-primary text-2xl" />
      <h2 className="my-1">{title}</h2>
      <h4 className="text-md italic text-gray-600">{subTitle}</h4>
    </div>
  );
};

export default SectionHeading;
