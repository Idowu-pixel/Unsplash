import React from "react";
import SortIcon from "@material-ui/icons/Sort";
import Searchbar from "./Searchbar";
import "./Display.css";

function Display() {
  return (
    <div className="display">
      <div className="display__text">
        <h1>Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <div className="display__page" />
        <Searchbar />
      </div>

      <div className="display__sectionTwo">
        <small>
          Photo of the Day <span className="display__span">by </span>Rob Vesseur
        </small>

        <small>
          <span className="display__span">Read more about the</span> Unsplash
          License
        </small>

        <div className="display__sectionThree">
          <div className="display__sectionIcon">
            <SortIcon className="display__icon" />
            <h4>SQUARESPACE</h4>
          </div>
          <small> Create your website today.</small>
        </div>
      </div>
    </div>
  );
}

export default Display;

/* <div className="display__text">
        <h1>Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
      </div>
      <div className="display__input">
        <Searchbar />
      </div>
      <div className="display__sectionTwo">
        <p>
          Photo of the Day <span className="display__span">by</span>Rob Vesseur
        </p>
      </div>
      <div divclassName="display__sectionThree">
        <SortIcon className="display__icon" />
        <p>All you need to create a website today</p>
      </div> */

// import Image from "./image/raychan.jpg";
// style={{
//   backgroundImage: "url(" + Image + ")",
// }}

//style={{ backgroundImage: `url(require("images/img.svg"))`

// Display.defaultProps = {
//   display: "display",
// };
