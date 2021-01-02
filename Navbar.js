import React from "react";
import "./Navbar.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__all">
        <div className="navbar__sectionOne">
          <div className="navbar__textOne">Editorial</div>
          <div className="navbar__textOne">Following</div>
        </div>
        <div className="navbar__sectionTwo">
          <div className="navbar__text">Current Event</div>
          <div className="navbar__text">Experimental</div>
          <div className="navbar__text">Fashion</div>
          <div className="navbar__text">Film</div>
          <div className="navbar__text">Health & Wellness</div>
          <div className="navbar__text">Interior</div>
          <div className="navbar__text">Nature</div>
          <div className="navbar__text">People</div>
          <div className="navbar__text">Street Photography</div>
        </div>
      </div>
      <div className="navbar__sectionThree">
        <AddAPhotoIcon className="navbar__icon" />
        <div className="navbar__text">View All</div>
      </div>
    </nav>
  );
}

export default Navbar;

/* <p className="navbar__text">Architechture</p>
          <p className="navbar__text">Current Event</p>
          <p className="navbar__text">Experimental</p>
          <p className="navbar__text">Fashion</p>
          <p className="navbar__text">Film</p>
          <p className="navbar__text">Health & Wellness</p>
          <p className="navbar__text">Interior</p>
          <p className="navbar__text">Nature</p>
          <p className="navbar__text">People</p>
          <p className="navbar__text">Street Photography</p> */
