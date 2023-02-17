import React from "react";
import Footer from "../../components/footer/Footer";
import ScheduleMid from "./ScheduleMid";
import ScheduleTop from "./ScheduleTop";

const Schedule = () => {
  return (
    <section>
      <ScheduleTop />
      <ScheduleMid />
      <Footer />
    </section>
  );
};

export default Schedule;
