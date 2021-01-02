import React, { useState, useEffect, useContext } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Context } from "./Context";
import { Consent } from "./Consent";
import "./DisplayTwo.css";

function DisplayTwo() {
  const [roll, setRoll] = useState(false);
  //const [show, setShow] = useState(true);
  const { input } = useContext(Context);
  const { query } = useContext(Consent);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollX > 100) {
        setRoll(true);
      } //else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, [roll]);

  // useEffect(() => {
  //   window.addEventListener("screen", () => {
  //     if (window.screenX > 768) {
  //       setShow(false);
  //     } else {
  //       setShow(true);
  //     }
  //   });
  // }, []);
  return (
    <div className="displayTwo">
      <div className="displayTwo__list">
        {query ? <h1>{query}</h1> : <h1>{input}</h1>}

        <ChevronRightIcon
          className="displayTwo__iconOne"
          id="displayTwo__iconOne"
        />
        <ChevronLeftIcon
          className="displayTwo__iconTwo"
          id="displayTwo__iconTwo"
        />

        <ul>
          <li>Ford</li>
          <li>Tesla</li>
          <li>Volxwagen</li>
          <li>Benz</li>
          <li>Toyota</li>
          <li>Honda</li>
          <li>Hyundai</li>
          <li>BMW</li>
          <li>Hummer</li>
          <li>Subaru</li>
          <li>Man</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayTwo;

/* <div className="pictureShow__title">
            <Avatar src="" alt="" />
            <p>{title}</p>
          </div>
          <ArrowDownwardIcon className="pictureShow__arrow" />
        </div> */
