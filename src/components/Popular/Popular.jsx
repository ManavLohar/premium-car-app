import React from "react";
import "./Popular.css";
import popularData from "./popularData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function Popular() {
  return (
    <section className='popular section' id='popular'>
      <h2 className='section__title'>
        Choose Your Electric Car <br /> Of The Porsche Brand
      </h2>

      <div className='popular__container container'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={1.3}
          loop={true}
          grabCursor={true}
          // navigation
          pagination={{ el: ".swiper-pagination", dynamicBullets: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          breakpoints={{
            540: {
              slidesPerView: 2.5
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}>
          <div>
            {popularData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <article className='popular__card'>
                    <div className='shape shape__smaller'></div>

                    <h1 className='popular__title'>{data.title}</h1>
                    <h3 className='popular__subtitle'>{data.subTitle}</h3>

                    <img src={data.img} alt='' className='popular__img' />

                    <div className='popular__data'>
                      <div className='popular__data-group'>
                        <i className='ri-battery-charge-line'></i> 3.7 Sec
                      </div>
                      <div className='popular__data-group'>
                        <i className='ri-funds-box-line'></i> 356 Km/h
                      </div>
                      <div className='popular__data-group'>
                        <i className='ri-charging-pile-2-line'></i> Electric
                      </div>
                    </div>

                    <h3 className='popular__price'>{data.price}</h3>

                    <button className='button popular__button'>
                      <i className='ri-shopping-bag-2-line'></i>
                    </button>
                  </article>
                </SwiperSlide>
              );
            })}
          </div>
          <div className='swiper-pagination'></div>
        </Swiper>
      </div>
    </section>
  );
}

export default Popular;
