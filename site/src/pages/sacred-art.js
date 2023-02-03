import React from 'react';
import Layout from '../components/layout/layout';
import SectionHeading from '../components/sectionHeading';
import Breadcrumbs from '../components/breadcrumbs';
import SacredArtCard from '../components/sacredArtCard';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

const isEven = (x) => x % 2 === 0;

const SacredArt = ({ location, data }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title='Sacred Art' />
      <div className='max-w-screen-xl mx-6 lg:mx-auto my-24'>
        <Breadcrumbs path={pathname} />
        <SectionHeading title='Sacred Art' />
        <div className='grid grid-cols-1 gap-12 my-24'>
          {data.art.nodes.map((sa, i) => (
            <SacredArtCard
              key={sa.id}
              title={sa.title}
              description={sa.description}
              reverse={isEven(i)}
              image={sa.art.asset.gatsbyImageData}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SacredArtQuery {
    art: allSanitySacredArt(sort: { order: ASC }) {
      nodes {
        id
        description
        order
        title
        art {
          asset {
            gatsbyImageData(width: 700)
          }
        }
      }
    }
  }
`;

export default SacredArt;
