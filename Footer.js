import React from "react";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__divIcon">
        <LocalPrintshopIcon className="footer__icon" />
        <p>Make something awesome</p>
        <small>Copyright 2020 &copy; by Idowu Enagameh </small>
      </div>
    </div>
  );
}

export default Footer;
