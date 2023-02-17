import React from "react";
import Footer from "../../components/footer/Footer";
import HomeBottom from "./HomeBottom";
import HomeMid from "./HomeMid";
import HomeTop from "./HomeTop";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section>
      <HomeTop />
      <HomeMid />
      <HomeBottom />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default Home;
