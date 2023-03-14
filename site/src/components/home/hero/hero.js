import React from 'react';
import * as styles from './hero.module.scss';
import cx from 'classnames';
import Button from '../../button/button';
import { faChurch, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: allSanityMainImage(filter: { current: { eq: true } }) {
        nodes {
          id
          title
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return (
    <div className='relative'>
      <div className={styles.overlay} />
      <GatsbyImage
        image={data.hero.nodes[0].image.asset.gatsbyImageData}
        alt='Trinity Evangelical Lutheran Church'
        className={styles.image}
      />
      <div className={cx(styles.content, 'w-full max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto')}>
        <div className={cx(styles.background, 'p-12 shadow-lg')}>
          <h1
            className={cx(
              'text-2xl lg:text-5xl text-center text-gray-700 tracking-wider'
            )}
          >
            Trinity Evangelical Lutheran Church
          </h1>
          <hr className='my-3 border-gray-500 w-1/2 mx-auto' />
          <h4 className='text-lg text-secondary lg:text-xl italic text-center mb-4'>
            A traditional, liturgical congregation of the Lutheran Church
            Missouri Synod
          </h4>
          <div className='flex flex-col lg:flex-row lg:justify-center'>
            <div className='mr-4 self-center mb-4 lg:mb-0'>
              <Button
                label='Who We Are'
                link='/who-we-are'
                theme='primary'
                icon={faChurch}
                size='large'
              />
            </div>
            <div className='self-center'>
              <Button
                label='Worship Schedule'
                link='/worship-schedule'
                theme='white'
                icon={faCalendarDays}
                size='large'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// <div className={styles.hero}>
//   <div className='max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto h-full flex flex-col justify-center items-center'>
//     <div className={cx(styles.background, 'p-12 shadow-lg relative z-20')}>
//       <h1
//         className={cx(
//           'text-2xl lg:text-5xl text-center text-gray-700 tracking-wider'
//         )}
//       >
//         Trinity Evangelical Lutheran Church
//       </h1>
//       <hr className='my-3 border-gray-500 w-1/2 mx-auto' />
//       <h4 className='text-lg text-secondary lg:text-xl italic text-center mb-4'>
//         A traditional, liturgical congregation of the Lutheran Church
//         Missouri Synod
//       </h4>
//       <div className='flex flex-col lg:flex-row lg:justify-center'>
//         <div className='mr-4 self-center mb-4 lg:mb-0'>
//           <Button
//             label='Who We Are'
//             link='/who-we-are'
//             theme='primary'
//             icon={faChurch}
//             size='large'
//           />
//         </div>
//         <div className='self-center'>
//           <Button
//             label='Worship Schedule'
//             link='/worship-schedule'
//             theme='white'
//             icon={faCalendarDays}
//             size='large'
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
