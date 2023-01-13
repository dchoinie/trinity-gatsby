import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import LinkCard from "../components/linkCard";
import LCMS from "../images/logos/lcms.png";
import MNSouth from "../images/logos/MN_South.png";
import CPH from "../images/logos/CPH.png";
import IE from "../images/logos/ie-logo.jpg";
import TWOLEF from "../images/logos/TWOLEF.png";
import LPR from "../images/logos/LPR.png";
import HT from "../images/logos/HT.png";
import Gottesdienst from "../images/logos/gottesdienst.png";
import ELLC from "../images/logos/ELLC.png";
import LCC from "../images/logos/LCC.png";
import CC from "../images/logos/CC.avif";
import Wittenberg from "../images/logos/Wittenberg.png";
import AdCrucem from "../images/logos/AdCrucem.webp";
import EP from "../images/logos/EP.png";
import CO from "../images/logos/CO.png";
import Seo from "../components/seo";

const linkData = [
  {
    name: "The Lutheran Church Missouri Synod",
    link: "https://www.lcms.org/",
    imgSrc: `${LCMS}`,
  },
  {
    name: "Minnesota South District of the LCMS",
    link: "https://www.mnsdistrict.org/",
    imgSrc: `${MNSouth}`,
  },
  {
    name: "The Lutheran Confessions",
    link: "https://www.lcms.org/about/beliefs/lutheran-confessions",
    imgSrc: `${LCMS}`,
  },
  {
    name: "Concordia Publishing House",
    link: "https://www.cph.org/",
    imgSrc: `${CPH}`,
  },
  {
    name: "Issues, Etc.",
    link: "https://issuesetc.org/",
    imgSrc: `${IE}`,
  },
  {
    name: "The Word of the Lord Endures Forever",
    link: "https://thewordendures.org/",
    imgSrc: `${TWOLEF}`,
  },
  {
    name: "Lutheran Public Radio",
    link: "https://lutheranpublicradio.org/",
    imgSrc: `${LPR}`,
  },
  {
    name: "Higher Things",
    link: "https://higherthings.org/",
    imgSrc: `${HT}`,
  },
  {
    name: "Gottesdienst",
    link: "https://www.gottesdienst.org/",
    imgSrc: `${Gottesdienst}`,
  },
  {
    name: "Evangelical-Lutheran Liturgical Congregations",
    link: "https://www.lutheranliturgy.org/",
    imgSrc: `${ELLC}`,
  },
  {
    name: "LCMS U",
    link: "https://www.lcms.org/how-we-serve/national/campus-ministry",
    imgSrc: `${LCMS}`,
  },
  {
    name: "Luther Classical College",
    link: "https://www.lutherclassical.org/",
    imgSrc: `${LCC}`,
  },
  {
    name: "Wittenberg Academy",
    link: "https://wittenbergacademy.org/",
    imgSrc: `${Wittenberg}`,
  },
  {
    name: "Ad Crucem",
    link: "https://www.adcrucem.com/",
    imgSrc: `${AdCrucem}`,
  },
  {
    name: "Concordia Collective",
    link: "https://concordiacollective.shop/",
    imgSrc: `${CC}`,
  },
  {
    name: "Emmanuel Press",
    link: "http://emmanuelpress.us/",
    imgSrc: `${EP}`,
  },
  {
    name: "Camp Omega",
    link: "https://campomega.org/",
    imgSrc: `${CO}`,
  },
];

const Links = ({ location }) => {
  const { pathname } = location;
  return (
    <Layout>
      <Seo title="Links" />
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Links" />
        <div className="my-24 grid grid-cols-3 gap-12">
          {linkData.map((r) => (
            <LinkCard title={r.name} link={r.link} logo={r.imgSrc} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Links;
