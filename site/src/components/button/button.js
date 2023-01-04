import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import * as styles from "./button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ label, link, onClick, theme, size, icon }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={cx("flex", styles.button, {
            [styles.white]: theme && theme.toLowerCase() === "white",
            [styles.primary]: theme && theme.toLowerCase() === "primary",
            [styles.large]: size && size.toLowerCase() === "large",
          })}
        >
          <span className={icon ? "mr-2" : ""}>{label}</span>
          {icon && <FontAwesomeIcon icon={icon} className="self-center" />}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={cx("flex", styles.button, {
            [styles.white]: theme && theme.toLowerCase() === "white",
            [styles.primary]: theme && theme.toLowerCase() === "primary",
            [styles.large]: size && size.toLowerCase() === "large",
          })}
        >
          <span className={icon ? "mr-2" : ""}>{label}</span>
          {icon && <FontAwesomeIcon icon={icon} className="self-center" />}
        </button>
      )}
    </>
  );
};

export default Button;
