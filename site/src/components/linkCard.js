import React from "react";
import Button from "./button/button";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

const LinkCard = ({ title, link, logo }) => {
  return (
    <div className="border border-gray-200 bg-gray-50 p-6 rounded shadow-lg flex flex-col h-full justify-between">
      <div>
        <img
          src={logo}
          alt={title}
          className="mb-4"
          style={{ height: "75px" }}
        />
        <h5 className="text-lg text-gray-700">{title}</h5>
        <hr class="my-3 border-gray-200 w-2/3" />
      </div>
      <div className="self-start">
        <Button
          label="Visit"
          href={link}
          icon={faArrowUpRightFromSquare}
          theme="primary"
        />
      </div>
    </div>
  );
};

export default LinkCard;
