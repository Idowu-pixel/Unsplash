import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Avatar } from "@material-ui/core";
import "./Image.css";

function Image({ pic, title }) {
  const [hovered, setHovered] = useState(false);

  const click = (e) => {
    e.preventDefault();
    //pic.links.download;
  };

  return (
    <div
      className="image"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="image__two">
          <FavoriteIcon className="image__icon" />
          <AddIcon className="image__Icon" />
        </div>
      )}

      <img
        className="image__image"
        alt={pic.alt_description}
        src={pic.urls.small}
      />
      {hovered && (
        <div className="image__card">
          <div className="image__title">
            <Avatar src={pic.user.profile_image.small} alt="" />
            <p>{title}</p>
          </div>
          <div className="image__line" />
          <ArrowDownwardIcon className="image__arrow" onClick={click} />
        </div>
      )}
    </div>
  );
}

export default Image;

// function download(filename, text) {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);

//   element.style.display = 'none';
//   document.body.appendChild(element);

//   element.click();

//   document.body.removeChild(element);
// }

// // Start file download.
// document.getElementById("dwn-btn").addEventListener("click", function(){
//   // Generate download of hello.txt file with some content
//   var text = document.getElementById("text-val").value;
//   var filename = "hello.txt";

//   download(filename, text);
// }, false);

// <a href="" id="downloadLink" download="" >HEY</a>

// const download = (file) => {
//   let link = getElementById('downloadLink')
//   link.setAttribute('download',file)
//   link.click()
// }
