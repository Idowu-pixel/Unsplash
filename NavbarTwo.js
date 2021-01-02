import React from "react";
import GroupIcon from "@material-ui/icons/Group";
import ImageIcon from "@material-ui/icons/Image";
import LayersIcon from "@material-ui/icons/Layers";
import TuneIcon from "@material-ui/icons/Tune";
import "./NavbarTwo.css";

function NavbarTwo() {
  return (
    <div className="navbarTwo">
      <div className="navbarTwo__sectionOne">
        <div className="navbarTwo__icon">
          <ImageIcon className="icon" />
          <p className="icon">Photo</p>
        </div>
        <div className="navbarTwo__icon">
          <LayersIcon className="icon" />
          <p className="icon">Collection</p>
        </div>
        <div className="navbarTwo__icon">
          <GroupIcon className="icon" />
          <p className="icon">User</p>
        </div>
      </div>
      <div className="navbarTwo__sectionTwo">
        <TuneIcon className="iconOne" />
      </div>
    </div>
  );
}

export default NavbarTwo;
