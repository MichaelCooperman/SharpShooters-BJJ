import React from "react";
import Footer from "../../components/footer/Footer";
import InstructorsMid from "./InstructorsMid";
import InstructorsTop from "./InstructorsTop";

const Instructors = (props) => {
  return (
    <section>
      <InstructorsTop />
      <InstructorsMid onOpen={props.onPopup} />
      <Footer />
    </section>
  );
};

export default Instructors;
