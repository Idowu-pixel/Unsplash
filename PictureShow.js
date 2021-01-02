import React, { useState } from "react";
import "./PictureShow.css";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Avatar } from "@material-ui/core";

function PictureShow({ img, title }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="pictureShow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="pictureShow__one">
          <div className="pictureShow__title">
            <Avatar src="" alt="" />
            <p>{title}</p>
          </div>
          <ArrowDownwardIcon className="pictureShow__arrow" />
        </div>
      )}
      {hovered && (
        <div className="pictureShow__two">
          <FavoriteIcon className="pictureShow__icon" />
          <AddIcon className="pictureShow__icon" />
        </div>
      )}

      <img src={img} alt="" />
    </div>
  );
}

export default PictureShow;
