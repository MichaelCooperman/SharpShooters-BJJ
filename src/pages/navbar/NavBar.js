import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navigation />
      <MobileNavigation />
    </React.Fragment>
  );
};

export default NavBar;
