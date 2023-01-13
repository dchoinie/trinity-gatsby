import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const contactCard = (icon, text) => (
  <div className="flex flex-col items-center border border-200 p-6 rounded shadow-lg bg-gray-50">
    <FontAwesomeIcon icon={icon} className="text-2xl mb-4 text-primary" />
    <p className="text-700 text-center">{text}</p>
  </div>
)

const Contact = ({ location }) => {
  const { pathname } = location;
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          address
          phone
          email
        }
      }
    }
  `);

  const contactInfo = [
    {
      icon: faPhone,
      text: `${data.site.siteMetadata.phone}`,
    },
    {
      icon: faEnvelope,
      text: `${data.site.siteMetadata.email}`,
    },
    {
      icon: faMapLocationDot,
      text: `${data.site.siteMetadata.address}`,
    },
  ]
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Contact" />
        <div className="mt-24 mb-12">
          <div className="grid grid-cols-3 gap-12">
            {contactInfo.map((c) => (
              contactCard(c.icon, c.text)
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-50 border border-gray-200 rounded shadow-lg p-12">
          <h3 className="text-center text-gray-700 text-3xl mb-12">Send Us A Message</h3>
          <form action="https://formspree.io/f/xbjejeby" method="POST">
            <div className="flex justify-between gap-12 w-full">
              <div className="w-full mb-12">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" id="first_name" placeholder="Enter Your First Name" required className="p-3 border border-gray-200 rounded shadow-lg w-full" />
              </div>
              <div className="w-full mb-12">
                <label htmlFor="name">Last Name</label>
                <input type="text" name="last_name" id="last_name" placeholder="Enter Your Last Name" required className="p-3 border border-gray-200 rounded shadow-lg w-full" />
              </div>
            </div>
            <div className="flex justify-between gap-12 w-full">
              <div className="w-full mb-12">
                <label htmlFor="name">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter Your Email" required className="p-3 border border-gray-200 rounded shadow-lg w-full" />
              </div>
              <div className="w-full mb-12">
                <label htmlFor="name">Phone</label>
                <input type="tel" name="phone" id="phone" placeholder="Enter Your Phone Number" required className="p-3 border border-gray-200 rounded shadow-lg w-full" />
              </div>
            </div>
            <div className="w-full mb-12">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="p-3 border border-gray-200 rounded shadow-lg w-full"></textarea>
            </div>
            <div className="flex w-full">
              <button type="submit" className="w-full rounded shadow text-center bg-primary px-1 py-3 text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
          <iframe title="Trinity Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.3815367108705!2d-93.57619778461381!3d44.219802679105904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f68f8f70a98d7b%3A0x83825fb46d532837!2sTrinity%20Lutheran%20Church!5e0!3m2!1sen!2sus!4v1618195755454!5m2!1sen!2sus" width="100%" height="450" style={{ border: "0" }} allowFullScreen loading="lazy"></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
