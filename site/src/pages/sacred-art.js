import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import SacredArtCard from "../components/sacredArtCard";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const isEven = (x) => x % 2 === 0;

const SacredArt = ({ location, data }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="Sacred Art" />
      <div className="max-w-screen-xl mx-6 lg:mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Sacred Art" />
        <div className="grid grid-cols-1 gap-12 my-24">
          {data.sacredArt.edges.map((sa, i) => (
            <SacredArtCard
              key={sa.node.title}
              title={sa.node.title}
              description={sa.node.description}
              reverse={isEven(i)}
              image={sa.node.art.asset}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query SacredArtQuery {
  sacredArt: allSanitySacredArt(sort: {order: ASC}) {
    edges {
      node {
        art {
          asset {
            _id
            metadata {
              blurHash
              hasAlpha
              isOpaque
              lqip
            }
          }
          ...ImageWithPreview
        }
        title
        description
      }
    }
  }
}
`

export default SacredArt;
