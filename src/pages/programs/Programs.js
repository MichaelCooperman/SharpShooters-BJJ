import React from "react";
import Footer from "../../components/footer/Footer";
import ProgramsMid from "./ProgramsMid";
import ProgramsTop from "./ProgramsTop";

const Programs = (props) => {
  return (
    <section>
      <ProgramsTop />
      <ProgramsMid onOpen={props.onPopup} />
      <Footer />
    </section>
  );
};

export default Programs;
