import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import SacredArtCard from "../components/sacredArtCard";
import img1 from "../images/sacredArt/1.jpg";
import img2 from "../images/sacredArt/2.jpg";
import img3 from "../images/sacredArt/3.jpg";
import img4 from "../images/sacredArt/4.jpg";
import img5 from "../images/sacredArt/5.jpg";
import img6 from "../images/sacredArt/6.jpg";

const sacredArtInfo = [
  {
    image: `${img1}`,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${img2}`,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${img3}`,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${img4}`,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${img5}`,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${img6}`,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
]

const isEven = (x) => x%2 === 0;

const SacredArt = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Sacred Art" />
        <div className="grid grid-cols-1 gap-12 my-24">
          {sacredArtInfo.map((art, i) => (
            <SacredArtCard image={art.image} title={art.title} description={art.description} reverse={isEven(i)} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SacredArt;