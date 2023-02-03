import React from 'react'
import cx from "classnames";
import { GatsbyImage } from 'gatsby-plugin-image';

const SacredArtCard = ({ image, title, description, reverse }) => {
  return (
    <div className={cx('flex flex-col w-full mb-24 gap-x-12', reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
      <div className="flex w-full lg:w-1/2 mb-4 lg:mb-0">
        <GatsbyImage
          image={image}
          alt={title}
          className="shadow-lg self-center"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <h4 className="text-2xl text-primary tracking-wider">{title}</h4>
        <hr className="my-3 border border-gray-200 w-2/3" />
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default SacredArtCard