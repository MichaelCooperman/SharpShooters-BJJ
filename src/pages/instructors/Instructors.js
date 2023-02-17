import React from "react";
import Footer from "../../components/footer/Footer";
import InstructorsMid from "./InstructorsMid";
import InstructorsTop from "./InstructorsTop";

const Instructors = () => {
  return (
    <section>
      <InstructorsTop />
      <InstructorsMid />
      <Footer />
    </section>
  );
};

export default Instructors;
