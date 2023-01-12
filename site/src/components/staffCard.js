import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";

const StaffCard = ({
  title,
  first,
  last,
  email,
  phone,
  image,
  bio,
  officeHours,
}) => {
  console.log(image);
  return (
    <div className="flex gap-12">
      <SanityImage
        asset={image}
        width={300}
        alt={`${first}, ${last}`}
        className="h-80 rounded shadow-lg"
      />
      <div className="flex flex-col">
        <h5 className="text-xl text-gray-700">{`${title}. ${first} ${last}`}</h5>
        <hr className="my-3 border border-gray-200 w-2/3" />
        <p className="text-gray-600 mb-4">{bio}</p>
        <a href={`mailto:${email}`} className="flex self-start mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-4 self-center text-lg text-primary" />
            <p className="text-gray-600">
               {email}
            </p>
        </a>
        <a href={`tel:${phone}`} className="flex self-start mb-4">
            <FontAwesomeIcon icon={faPhone} className="mr-4 self-center text-lg text-primary" />
            <p className="text-gray-600">
               {phone}
            </p>
        </a>
        <div className="flex self-start mb-4">
            <FontAwesomeIcon icon={faClock} className="mr-4 self-center text-lg text-primary" />
            <p className="text-gray-600">
               Office hours {officeHours}
            </p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
