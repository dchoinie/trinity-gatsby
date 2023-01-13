import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import SacredArtCard from "../components/sacredArtCard";
import Nativity from "../images/sacredArt/nativity.jpg";
import BoyTemple from "../images/sacredArt/boyTemple.jpg";
import Baptism from "../images/sacredArt/baptism.jpg";
import Calling from "../images/sacredArt/calling.jpg";
import Transfiguration from "../images/sacredArt/transfiguration.jpeg";
import LordsSupper from "../images/sacredArt/lordsSupper.jpg";
import Crucifixion from "../images/sacredArt/crucifixion.jpg";
import Resurrection from "../images/sacredArt/resurrection.jpg";
import Ascension from "../images/sacredArt/ascension.jpeg";

const sacredArtInfo = [
  {
    image: `${Nativity}`,
    title: 'The Nativity of Our Lord',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${BoyTemple}`,
    title: 'The Boy Jesus in the Temple',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${Baptism}`,
    title: 'The Baptism of Our Lord',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${Calling}`,
    title: 'The Calling of the First Disciples',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${Transfiguration}`,
    title: 'The Transfiguration of Our Lord',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${LordsSupper}`,
    title: "The Lord's Supper",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${Crucifixion}`,
    title: 'The Crucifixion of Our Lord',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${Resurrection}`,
    title: 'The Resurrection of Our Lord',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis neque! Corrupti laborum facere culpa corporis perspiciatis laboriosam neque voluptatem, aliquam exercitationem.',
  },
  {
    image: `${Ascension}`,
    title: 'The Ascension of Our Lord',
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