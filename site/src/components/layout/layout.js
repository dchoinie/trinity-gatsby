import React from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default layout;
