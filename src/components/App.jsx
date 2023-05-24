import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Popular from "../components/Popular/Popular";
import Features from "../components/Features/Features";
import Featured from "../components/Featured/Featured";
import Offer from "../components/Offer/Offer";
import Logos from "../components/Logos/Logos";
import Footer from "../components/Footer/Footer";

function App() {
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }
  window.addEventListener("scroll", scrollUp);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Popular />
      <Features />
      <Featured />
      <Offer />
      <Logos />
      <Footer />
      <a href='#' className='scrollup' id='scroll-up'>
        <i className='ri-arrow-up-line'></i>
      </a>
    </div>
  );
}

export default App;
