import React, { useState } from "react";
import NavItem from "./navItem";
import SmallNavItem from "./smallNavItem";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Button from "../button/button";
import { faRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OutsideClickHandler from "react-outside-click-handler";

const navItems = [
  {
    label: "Home",
    link: "/",
    subMenu: [],
  },
  {
    label: "Our Church",
    subMenu: [
      {
        label: "Who We Are",
        link: "/who-we-are",
      },
      {
        label: "What We Believe",
        link: "/what-we-believe",
      },
      {
        label: "What To Expect",
        link: "/what-to-expect",
      },
      {
        label: "Worship Schedule",
        link: "/worship-schedule",
      },
      {
        label: "Our Staff",
        link: "/staff",
      },
    ],
  },
  {
    label: "Resources",
    subMenu: [
      {
        label: "Bulletins",
        link: "/bulletins",
      },
      {
        label: "Catechesis",
        link: "/catechesis",
      },
      {
        label: "Sermons",
        link: "/sermons",
      },
      {
        label: "Links",
        link: "/links",
      },
    ],
  },
  {
    label: "Events",
    link: "/events",
    subMenu: [],
  },
  {
    label: "Sacred Art",
    link: "/sacred-art",
    subMenu: [],
  },
  {
    label: "Contact",
    link: "/contact",
    subMenu: [],
  },
];

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div className="bg-primary shadow-md">
      <div className="lg:max-w-screen-xl mx-6 lg:mx-auto py-4 flex justify-between lg:gap-6">
        <div className="lg:w-1/4">
          <Link to="/">
            <div className="bg-white absolute top-0 p-4 rounded-bl rounded-br shadow-md z-10">
              <StaticImage
                src="../../images/LCMS_logo.png"
                alt="LCMS Logo"
                placeholder="blurred"
                className="w-12 lg:w-16"
              />
            </div>
          </Link>
          ;
        </div>
        <div className="lg:hidden relative">
          <OutsideClickHandler onOutsideClick={() => setHamburgerOpen(false)}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-xl text-white relative z-20"
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            />
            {hamburgerOpen && (
              <div className="absolute top-0 right-0 z-10 mt-8 bg-white px-7 py-3 rounded shadow-lg">
                {navItems.map((item) => (
                  <SmallNavItem
                    key={item.label}
                    label={item.label}
                    link={item.link}
                    subMenu={item.subMenu}
                  />
                ))}
                <div className="whitespace-nowrap mt-2">
                  <Button
                    label="Member Sign In"
                    link="/"
                    theme="primary"
                    icon={faRightToBracket}
                  />
                </div>
              </div>
            )}
          </OutsideClickHandler>
        </div>
        <div className="lg:w-3/4 lg:flex justify-between items-center hidden">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              link={item.link}
              subMenu={item.subMenu}
              theme="light"
            />
          ))}
        </div>
        <div className="lg:w-1/4 lg:flex justify-end hidden">
          <Button
            label="Member Sign In"
            link="/"
            theme="white"
            icon={faRightToBracket}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
