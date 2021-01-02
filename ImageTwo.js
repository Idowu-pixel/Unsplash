import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Avatar } from "@material-ui/core";
import "./ImageTwo.css";

function ImageTwo({ see, title }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="imageTwo"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="imageTwo__two">
          <FavoriteIcon className="imageTwo__icon" />
          <AddIcon className="imageTwo__Icon" />
        </div>
      )}

      <img
        className="imageTwo__image"
        alt={see.alt_description}
        src={see.urls.small}
      />
      {hovered && (
        <div className="imageTwo__card">
          <div className="imageTwo__title">
            <Avatar src={see.user.profile_image.small} alt="" />
            <p>{title}</p>
          </div>
          <div className="imageTwo__line" />
          <ArrowDownwardIcon className="imageTwo__arrow" />
        </div>
      )}
    </div>
  );
}

export default ImageTwo;
