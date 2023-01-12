import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../button/button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, content, buttonText, buttonLink }) => {
  return (
    <div className="border border-gray-100 rounded shadow-lg h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col p-6">
          <FontAwesomeIcon icon={icon} className="text-2xl text-primary mb-2" />
          <h4 className="text-xl text-center text-gray-700">{title}</h4>
          <hr className="my-3 border-gray-200 w-2/3 mx-auto" />
          <div>{content}</div>
        </div>
        <div className="bg-gray-50 rounded-bl rounded-br flex justify-center">
          <div className="p-6 self-center">
            <Button
              label={buttonText}
              link={buttonLink}
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

export default Card;
