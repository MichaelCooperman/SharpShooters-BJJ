import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <Navigation onOpen={props.onPopup} />
      <MobileNavigation />
    </React.Fragment>
  );
};

export default NavBar;
