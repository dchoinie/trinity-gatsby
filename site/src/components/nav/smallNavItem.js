import React from "react";
import { Link } from "gatsby";

const SmallNavItem = ({ label, link, subMenu }) => {
  return (
    <>
      {subMenu && subMenu.length > 0 ? (
        <div className="whitespace-nowrap mr-2 flex flex-col text-gray-700">
          <span className="mb-1">{label}</span>
          <ul className="flex flex-col items-start">
            {subMenu.map((subItem) => (
              <Link key={subItem.label} to={subItem.link} className="ml-4 text-gray-600 mb-1">
                {subItem.label}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col">
          <Link
            to={link}
            className="text-gray-700 hover:text-gray-700 whitespace-nowrap mb-1"
          >
            {label}
          </Link>
        </div>
      )}
    </>
  );
};

export default SmallNavItem;
