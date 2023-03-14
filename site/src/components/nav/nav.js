import React, { useState } from 'react';
import NavItem from './navItem';
import SmallNavItem from './smallNavItem';
import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Button from '../button/button';
import {
  faRightToBracket,
  faBars,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClickHandler from 'react-outside-click-handler';

const navItems = [
  {
    label: 'Home',
    link: '/',
    subMenu: [],
  },
  {
    label: 'Our Church',
    subMenu: [
      {
        label: 'Who We Are',
        link: '/who-we-are',
      },
      {
        label: 'What We Believe',
        link: '/what-we-believe',
      },
      {
        label: 'What To Expect',
        link: '/what-to-expect',
      },
      {
        label: 'Worship Schedule',
        link: '/worship-schedule',
      },
      {
        label: 'Our Staff',
        link: '/staff',
      },
    ],
  },
  {
    label: 'Resources',
    subMenu: [
      {
        label: 'Bulletins',
        link: '/bulletins',
      },
      {
        label: 'Catechesis',
        link: '/catechesis',
      },
      {
        label: 'Sermons',
        link: '/sermons',
      },
      {
        label: 'Links',
        link: '/links',
      },
    ],
  },
  {
    label: 'Events',
    link: '/events',
    subMenu: [],
  },
  {
    label: 'Sacred Art',
    link: '/sacred-art',
    subMenu: [],
  },
  {
    label: 'Contact',
    link: '/contact',
    subMenu: [],
  },
];

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavLogoQuery {
      logo: file(relativePath: { eq: "LCMS_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 56)
        }
      }
    }
  `);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div className='bg-primary shadow-md relative'>
      <div className='lg:max-w-screen-xl mx-6 lg:mx-auto py-4 flex justify-between lg:gap-6'>
        <div className='lg:w-1/4'>
          <Link to='/'>
            <div className='bg-white absolute top-0 p-4 rounded-bl rounded-br shadow-md z-20'>
              <GatsbyImage
                image={data.logo.childImageSharp.gatsbyImageData}
                alt='LCMS Logo'
              />
            </div>
          </Link>
          ;
        </div>
        <div className='lg:hidden'>
          <OutsideClickHandler onOutsideClick={() => setHamburgerOpen(false)}>
            <FontAwesomeIcon
              icon={faBars}
              className='text-xl text-white z-20 hover:cursor-pointer'
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            />
            <div
              className={cx(
                'z-20 bg-white px-6 py-12 absolute top-0 left-0 w-full h-screen transform transition-all duration-300 ease-in-out',
                hamburgerOpen ? 'scale-100' : 'scale-0'
              )}
            >
              <FontAwesomeIcon
                icon={faX}
                className='absolute top-5 right-6 text-lg text-gray-800 hover:cursor-pointer'
                onClick={() => setHamburgerOpen(false)}
              />
              <div className='h-full border-border-red-500 flex flex-col place-items-center text-center'>
                <GatsbyImage
                  image={data.logo.childImageSharp.gatsbyImageData}
                  alt='LCMS Logo'
                  className='w-16'
                />
                <hr className='border border-gray-200 my-6 w-2/3 mx-auto' />
                {navItems.map((item) => (
                  <SmallNavItem
                    key={item.label}
                    label={item.label}
                    link={item.link}
                    subMenu={item.subMenu}
                  />
                ))}
                <div className='whitespace-nowrap mt-2'>
                  <Button
                    label='Member Sign In'
                    link='/'
                    theme='primary'
                    icon={faRightToBracket}
                    size='large'
                  />
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
        <div className='lg:w-3/4 lg:flex justify-between items-center hidden'>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              link={item.link}
              subMenu={item.subMenu}
              theme='light'
            />
          ))}
        </div>
        <div className='lg:w-1/4 lg:flex justify-end hidden'>
          <Button
            label='Member Sign In'
            link='/'
            theme='white'
            icon={faRightToBracket}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
