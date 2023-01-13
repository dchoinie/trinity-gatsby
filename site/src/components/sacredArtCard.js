import React from 'react'
import cx from "classnames";

const SacredArtCard = ({ image, title, description, reverse }) => {
  return (
    <div className={cx('flex w-full mb-24 gap-x-12', reverse ? "flex-row-reverse" : "")}>
      <div className="flex w-1/2">
        <img src={image} alt={title} className="shadow-lg" />
      </div>
      <div className="flex flex-col w-1/2">
        <h4 className="text-2xl text-primary tracking-wider">{title}</h4>
        <hr className="my-3 border border-gray-200 w-2/3" />
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default SacredArtCard