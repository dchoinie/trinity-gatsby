import React from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import '@fortawesome/fontawesome-svg-core/styles.css';

const layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
