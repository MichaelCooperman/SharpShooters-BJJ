import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Instructors from "./pages/instructors/Instructors";
import Programs from "./pages/programs/Programs";
import Schedule from "./pages/schedule/Schedule";
import Contact from "./pages/contact/Contact";
import NavBar from "./pages/navbar/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/instructors" element={<Instructors />} />
        <Route exact path="/programs" element={<Programs />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
