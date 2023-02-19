import React from "react";
import Footer from "../../components/footer/Footer";
import ScheduleMid from "./ScheduleMid";
import ScheduleTop from "./ScheduleTop";

const Schedule = (props) => {
  return (
    <section>
      <ScheduleTop />
      <ScheduleMid onOpen={props.onPopup} />
      <Footer />
    </section>
  );
};

export default Schedule;
