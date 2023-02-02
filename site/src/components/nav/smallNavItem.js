import React, { useState } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const SmallNavItem = ({ label, link, subMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      {subMenu && subMenu.length > 0 ? (
        <div className='whitespace-nowrap flex flex-col text-gray-700 w-full text-xl'>
          <button
            className='flex justify-center w-full mb-3'
            onClick={() => setSubMenuOpen(!subMenuOpen)}
          >
            <span className='mr-2'>{label}</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={cx(
                'self-center transform transition-all duration-300 ease-in-out',
                subMenuOpen ? 'rotate-90' : 'rotate-0'
              )}
            />
          </button>
          {subMenuOpen && (
            <ul className='flex flex-col items-center w-full'>
              {subMenu.map((subItem) => (
                <li key={subItem.label} className='w-full mb-3'>
                  <Link
                    to={subItem.link}
                    className='text-gray-600 text-center hover:text-primary hover:underline'
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className='flex flex-col w-full text-xl mb-3'>
          <Link
            to={link}
            className='text-gray-700 hover:text-primary whitespace-nowrap hover:underline'
          >
            {label}
          </Link>
        </div>
      )}
    </>
  );
};

export default SmallNavItem;
