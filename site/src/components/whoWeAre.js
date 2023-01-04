import React from "react";

const WhoWeAre = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-gray-700 text-2xl tracking-wider">{title}</h4>
      <hr class="my-3 border-gray-200 w-2/3" />
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhoWeAre;
