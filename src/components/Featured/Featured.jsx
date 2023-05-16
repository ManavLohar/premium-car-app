import React from "react";
import "./Featured.css";
import mixitup from "mixitup";

import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import featuredData from "./featuredData";
import { useEffect } from "react";

// mixitup property
function Featured() {
  useEffect(() => {
    mixitup(".featured__content", {
      selectors: {
        target: ".featured__card",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);
  var linkFeatured = document.querySelectorAll(".featured__item");
  function activeFeatured() {
    linkFeatured.forEach((l) => l.classList.remove("active-featured"));
    this.classList.add("active-featured");
  }
  linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

  return (
    <section className='featured section' id='featured'>
      <h2 className='section__title'>Featured Luxury Cars</h2>

      <div className='featured__container container'>
        <ul className='featured__filters'>
          <li>
            <button
              className='featured__item'
              data-filter='all'>
              <span>All</span>
            </button>
          </li>
          <li>
            <button className='featured__item' data-filter='.tesla'>
              <img src={logo3} alt='' />
            </button>
          </li>
          <li>
            <button className='featured__item' data-filter='.audi'>
              <img src={logo2} alt='' />
            </button>
          </li>
          <li>
            <button className='featured__item' data-filter='.porsche'>
              <img src={logo1} alt='' />
            </button>
          </li>
        </ul>
        <div className='featured__content grid'>
          {featuredData.map((data, index) => {
            return (
              <article key={index} className={data.dataFilter}>
                <div className='shape shape__smaller'></div>
                <h1 className='featured__title'>{data.title}</h1>
                <h3 className='featured__subtitle'>{data.subTitle}</h3>
                <img src={data.img} alt='' className='featured__img' />
                <h3 className='featured__price'>{data.price}</h3>
                <button className='featured__button button'>
                  <i className='ri-shopping-bag-2-line' />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Featured;
