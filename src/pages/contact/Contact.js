import React from "react";
import Footer from "../../components/footer/Footer";
import ContactMid from "./ContactMid";
import ContactTop from "./ContactTop";

const Contact = (props) => {
  return (
    <section>
      <ContactTop />
      <ContactMid onOpen={props.onPopup} />
      <Footer />
    </section>
  );
};

export default Contact;
