import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Breadcrumbs = ({ path }) => {
  const displayPath = (str) => {
    const removeEndSlash = str.endsWith("/") ? str.slice(0, -1) : str;
    const removeStartSlash = removeEndSlash.startsWith("/")
      ? removeEndSlash.slice(1)
      : removeEndSlash;
    return removeStartSlash;
  };
  return (
    <div className="flex">
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="self-center text-primary" />
      </Link>
      <span className="mx-2"> / </span>
      {displayPath(path) ? (
        <Link to={path} className="self-center text-gray-700 hover:underline">
          {displayPath(path)}
        </Link>
      ) : null}
    </div>
  );
};

export default Breadcrumbs;
