import React from "react";
import * as styles from "./hero.module.scss";
import cx from "classnames";
import Button from "../../button/button";
import { faChurch, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const hero = () => {
  return (
    <div className={styles.hero}>
      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center items-center">
        <div className={cx(styles.background, "p-6")}>
          <h1
            className={cx(
              styles.heroText,
              "text-5xl text-white font-bold mb-4"
            )}
          >
            Trinity Evangelical Lutheran Church
          </h1>
          <h3 className="text-gray-700 text-xl text-center mb-4">
            A traditional, liturgical congregation of the Lutheran Church
            Missouri Synod
          </h3>
          <div className="flex justify-center">
            <div className="mr-4">
              <Button
                label="Who We Are"
                to="/"
                theme="primary"
                icon={faChurch}
              />
            </div>
            <div className="">
              <Button
                label="Worship Schedule"
                to="/"
                theme="white"
                icon={faCalendarDays}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
