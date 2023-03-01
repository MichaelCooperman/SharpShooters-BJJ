import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Instructors from "./pages/instructors/Instructors";
import Programs from "./pages/programs/Programs";
import Schedule from "./pages/schedule/Schedule";
import Contact from "./pages/contact/Contact";
import PopUp from "./components/modal/PopUp";
import ButtonScroll from "./components/buttons/ButtonScroll";
import Header from "./pages/navbar/Header";
import ButtonMobile from "./components/buttons/ButtonMobile";

const App = () => {
  const [popupIsShown, setPopupIsShown] = useState(false);

  const showPopupHandler = () => {
    setPopupIsShown(true);
  };

  const hidePopupHandler = () => {
    setPopupIsShown(false);
  };

  return (
    <main>
      {popupIsShown && <PopUp onClose={hidePopupHandler} />}
      <Header onPopup={showPopupHandler} />
      <Routes>
        <Route exact path="/" element={<Home onPopup={showPopupHandler} />} />
        <Route
          exact
          path="/instructors"
          element={<Instructors onPopup={showPopupHandler} />}
        />
        <Route
          exact
          path="/programs"
          element={<Programs onPopup={showPopupHandler} />}
        />
        <Route
          exact
          path="/schedule"
          element={<Schedule onPopup={showPopupHandler} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact onPopup={showPopupHandler} />}
        />
      </Routes>
      <ButtonMobile onPopup={showPopupHandler} />
      <ButtonScroll />
    </main>
  );
};

export default App;
