import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Display from "./Display";
import Show from "./Show";
import PictureContain from "./PictureContain";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Display />
      <Show />
      <PictureContain />
      <Footer />
    </div>
  );
}

export default Home;

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
