import React from "react";
import NavbarTwo from "./NavbarTwo";
import DisplayTwo from "./DisplayTwo";
import Footer from "./Footer";
import ShowPhoto from "./ShowPhoto";
import ShowPhotoTwo from "./ShowPhotoTwo";
import Header from "./Header";

function Banner() {
  return (
    <div className="banner">
      <Header />
      <NavbarTwo />
      <DisplayTwo />
      <ShowPhoto />
      <ShowPhotoTwo />
      <Footer />
    </div>
  );
}

export default Banner;
