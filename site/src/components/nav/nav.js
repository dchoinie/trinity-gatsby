import React from "react";
import NavItem from "./navItem";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Button from "../button/button";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

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

const nav = () => {
  return (
    <div className="bg-primary shadow-md">
      <div className="max-w-screen-xl mx-auto py-4 flex gap-6">
        <div className="w-1/4">
          <Link to="/">
            <div className="bg-white absolute top-0 p-4 rounded-bl rounded-br shadow-md z-10">
              <StaticImage
                src="../../images/LCMS_logo.png"
                height={80}
                alt="LCMS Logo"
                placeholder="blurred"
              />
            </div>
          </Link>
          ;
        </div>
        <div className="w-3/4 flex justify-between items-center">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              link={item.link}
              subMenu={item.subMenu}
            />
          ))}
        </div>
        <div className="w-1/4 flex justify-end">
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

export default nav;
