import React from "react";
import "./Home.css";

import home from "../../img/home.png";

function Home() {
  return (
    <section className='home section' id='home'>
      <div className='shape shape__big'></div>
      <div className='shape shape__small'></div>
      <div className='home__container container grid'>
        <div className='home__data'>
          <h1 className='home__title'>Choose The Best Car</h1>
          <h2 className='home__subtitle'>Porsche Mission E</h2>
          <h3 className='home__elec'>
            <i className='ri-flashlight-fill'></i> Electric Car
          </h3>
        </div>
        <img src={home} alt='' className='home__img' />
        <div className='home__car'>
          <div className='home__car-data'>
            <div className='home__car-icon'>
              <i className='ri-temp-cold-line' />
            </div>
            <h2 className='home__car-number'>24°</h2>
            <h3 className='home__car-name'>TEMPERATURE</h3>
          </div>
          <div className='home__car-data'>
            <div className='home__car-icon'>
            <i className="ri-battery-charge-line"></i>
            </div>
            <h2 className='home__car-number'>873</h2>
            <h3 className='home__car-name'>MILEAGE</h3>
          </div>
          <div className='home__car-data'>
            <div className='home__car-icon'>
              <i className='ri-flashlight-fill' />
            </div>
            <h2 className='home__car-number'>94%</h2>
            <h3 className='home__car-name'>BATTERY</h3>
          </div>
        </div>
        <a href='#' className='home__button'>
          START
        </a>
      </div>
    </section>
  );
}

export default Home;
