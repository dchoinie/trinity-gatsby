import React from "react";
import * as styles from "./hero.module.scss";
import cx from "classnames";
import Button from "../../button/button";
import { faChurch, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const hero = () => {
  return (
    <div className={styles.hero}>
      <div className="max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto h-full flex flex-col justify-center items-center">
        <div className={cx(styles.background, "p-12 shadow-lg")}>
          <h1 className={cx("text-2xl lg:text-5xl text-center text-gray-700 tracking-wider")}>
            Trinity Evangelical Lutheran Church
          </h1>
          <hr className="my-3 border-gray-500 w-1/2 mx-auto" />
          <h3 className="text-lg text-secondary lg:text-xl italic text-center mb-4">
            A traditional, liturgical congregation of the Lutheran Church
            Missouri Synod
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="mr-4 self-center mb-4 lg:mb-0">
              <Button
                label="Who We Are"
                link="/who-we-are"
                theme="primary"
                icon={faChurch}
                size="large"
              />
            </div>
            <div className="self-center">
              <Button
                label="Worship Schedule"
                link="/worship-schedule"
                theme="white"
                icon={faCalendarDays}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
