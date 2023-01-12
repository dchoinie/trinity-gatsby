import React from "react";

const WhoWeAre = ({ title, description }) => {
  return (
    <div className="flex flex-col border border-gray-200 justify-between h-full bg-gray-50 rounded shadow p-6">
      <div>
        <h4 className="text-gray-700 text-2xl tracking-wider">{title}</h4>
        <hr className="my-3 border-gray-200 w-2/3" />
      </div>
      <div className="flex h-full">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
