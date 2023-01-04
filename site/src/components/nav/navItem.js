import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import OutsideClickHandler from "react-outside-click-handler";

const NavItem = ({ label, link, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex mr-6 last:mr-0">
      {subMenu && subMenu.length > 0 ? (
        <div className="flex items-center text-white">
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mr-2 text-white hover:text-gray-300 tracking-wide"
            >
              {label}
            </button>
            {isOpen ? (
              <FontAwesomeIcon icon={faChevronUp} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="text-white" />
            )}
            {isOpen && (
              <div className="bg-white p-6 w-52 flex flex-col absolute z-10 rounded shadow-md mt-2">
                {subMenu.map((subItem) => (
                  <Link
                    to={subItem.link}
                    className="text-gray-900 hover:text-primary pb-3 mt-3 border-b border-gray-200 last:border-b-0 last:pb-0 first:mt-0"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </OutsideClickHandler>
        </div>
      ) : (
        <Link
          to={link}
          className="text-white hover:text-gray-300 tracking-wide"
        >
          {label}
        </Link>
      )}
    </div>
  );
};

export default NavItem;
