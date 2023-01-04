import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import { Link } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          address
          phone
          email
          description
        }
      }
    }
  `);

  const footerItems = [
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
      label: "Staff",
      link: "/staff",
    },
    {
      label: "Worship Schedule",
      link: "/worship-schedule",
    },
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
    {
      label: "Events",
      link: "/events",
    },
    {
      label: "Sacred Art",
      link: "/sacred-art",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-gray-50 text-sm">
      <div className="max-w-screen-xl mx-auto pt-12">
        <div className="flex justify-between gap-12">
          <div className="flex flex-col w-1/3 text-gray-700">
            <StaticImage
              src="../../images/LCMS_logo.png"
              placeholder="blurred"
              width={75}
              className="self-start mb-1"
            />
            <h6 className="text-lg">{data.site.siteMetadata.title}</h6>
            <p className="text-gray-600 italic">
              {data.site.siteMetadata.description}
            </p>
            <hr class="my-3 border-gray-200 w-2/3" />
            <div className="mb-1 flex">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="self-center mr-2"
              />
              {data.site.siteMetadata.address}
            </div>
            <div className="mb-1 flex">
              <FontAwesomeIcon icon={faPhone} className="self-center mr-2" />
              {data.site.siteMetadata.phone}
            </div>
            <div className="mb-1 flex">
              <FontAwesomeIcon icon={faEnvelope} className="self-center mr-2" />
              {data.site.siteMetadata.email}
            </div>
          </div>
          <div className="flex flex-col justify-end items-center w-1/3">
            <p className="text-lg text-gray-700 text-center underline mb-4">
              Navigation
            </p>
            <ul className="text-center text-gray-600 grid grid-cols-2 gap-x-2 gap-y-4">
              {footerItems.map((item) => (
                <Link to={item.link}>{item.label}</Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-end justify-end w-1/3">
            <div className="self-end mb-4">
              <Button
                label="Member Sign In"
                theme="primary"
                size="small"
                icon={faAngleRight}
                link="/"
              />
            </div>
            <div className="flex">
              <p className="text-gray-600">Terms & Conditions</p>
              <span className="mx-2 text-gray-600">|</span>
              <p className="text-gray-600">Privacy Policy</p>
            </div>
          </div>
        </div>
        <hr class="mt-16 mb-10 border-gray-200" />
        <p class="text-center text-gray-600 pb-10">
          © Copyright {new Date().getFullYear()}, All Rights Reserved Trinity
          Evangelical Lutheran Church
        </p>
      </div>
    </div>
  );
};

export default Footer;
