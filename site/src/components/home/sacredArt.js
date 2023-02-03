import React from 'react';
import SectionHeading from '../sectionHeading';
import { faBrush, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../button/button';
import { graphql, useStaticQuery } from 'gatsby';

const SacredArt = () => {
  const data = useStaticQuery(graphql`
    query SacredArtHomeQuery {
      art: file(relativePath: { eq: "sacredArt/resurrection.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `);
  return (
    <div className='my-48 max-w-screen-xl mx-6 lg:mx-auto'>
      <SectionHeading
        title='Sacred Art'
        subTitle='But now, O Lord, you are our Father; we are the clay, and you are our potter; we are all the work of your hand'
        icon={faBrush}
      />
      <div className='my-24 flex flex-col lg:flex-row justify-between gap-12'>
        <div className='flex w-full lg:w-1/2'>
          <GatsbyImage
            image={data.art.childImageSharp.gatsbyImageData}
            alt="Resurrection Painting"
            className='shadow-lg'
          />
        </div>
        <div className='flex flex-col w-full lg:w-1/2'>
          <p className='text-gray-600 mb-4'>
            After meeting with Professor William Bukowski of Betheny Lutheran
            College in Mankato in 2015, Trinity Lutheran Church decided to add
            sacred art to our sanctuary. The congregation commissioned Professor
            Bukowski to paint ten original works of sacred art to beautify our
            church. These works portray the life of Jesus, highlighting events
            that appear annually in the Holy Gospels of the historic lectionary
            of the Church.
          </p>
          <div className='self-start'>
            <Button
              label='View All Sacred Art'
              link='/sacred-art'
              theme='primary'
              size='large'
              icon={faAngleRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacredArt;
