import React from "react";

const WhatToExpect = ({ title, description }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 p-6 flex flex-col rounded shadow-lg">
      <h5 className="text-2xl tracking-wider text-gray-700">{title}</h5>
      <hr className="my-3 border-gray-300 w-2/3" />
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default WhatToExpect;
