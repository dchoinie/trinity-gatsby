import React from "react";
import Layout from "../components/layout/layout";
import SectionHeading from "../components/sectionHeading";
import Breadcrumbs from "../components/breadcrumbs";
import { graphql } from "gatsby";
import StaffCard from "../components/staffCard";

const Staff = ({ location, data }) => {
  const { pathname } = location;
  console.log(data);
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-24">
        <Breadcrumbs path={pathname} />
        <SectionHeading title="Staff" />
        <div className="my-24 grid grid-cols-max gap-12 justify-items-center">
          {data.allSanityStaff.edges.map((staff) => (
            <StaffCard
              key={staff.node.id}
              title={staff.node.title}
              first={staff.node.firstName}
              last={staff.node.lastName}
              email={staff.node.email}
              phone={staff.node.phone}
              image={staff.node.image.asset}
              officeHours={staff.node.officeHours}
              bio={staff.node.bio}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query StaffQuery {
  allSanityStaff {
    edges {
      node {
        bio
        email
        firstName
        id
        lastName
        officeHours
        phone
        title
        image {
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
      }
    }
  }
}`

export default Staff;
