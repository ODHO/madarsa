import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero from "../../images/man/home3-hero-boy1.jpg";
import map from "../../images/man/home3-hero-map.jpg";
import vlntr2 from "../../images/users/volunteer-user1.jpg";
import vlntr3 from "../../images/users/volunteer-user2.jpg";
import vlntr4 from "../../images/users/volunteer-user3.jpg";
import vlntr5 from "../../images/users/volunteer-user4.jpg";
import vlntr6 from "../../images/users/volunteer-user5.jpg";
import vlntr7 from "../../images/users/volunteer-user6.jpg";

const Hero3 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Example hero data slides
  const heroSlides = [
    {
      smallTitle: "Hope for",
      bigTitle: "Humanity",
      text: "We help nonprofits from Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training.",
      img: hero,
    },
    {
      smallTitle: "Stand with",
      bigTitle: "Kindness",
      text: "Your donation makes a real impact. Together, we empower communities worldwide to grow stronger.",
      img: vlntr3,
    },
    {
      smallTitle: "Join the",
      bigTitle: "Movement",
      text: "Be part of something bigger. Every step, every donation, changes lives for the better.",
      img: vlntr5,
    },
  ];

  return (
    <section className="hero hero--style3">
      <div className="hero__map">
        <img src={map} alt="Gainioz Map" />
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        // autoplay={{disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        navigation={true}
        // loop={true}
        className="heroSwiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container container--custom">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-8 mb-30">
                  <div className="hero__content">
                    <span className="hero__title hero__title--small">
                      {slide.smallTitle}
                    </span>
                    <h1 className="hero__title hero__title--big">
                      {slide.bigTitle}
                    </h1>
                    <p className="hero__text">{slide.text}</p>

                    <Link
                      className="btn btn--styleOne btn--primary it-btn"
                      to="/donation-listing"
                    >
                      <span className="btn__text">join the journey</span>
                      <i className="fa-solid fa-heart btn__icon"></i>
                      <span className="it-btn__inner">
                        <span className="it-btn__blobs">
                          <span className="it-btn__blob"></span>
                          <span className="it-btn__blob"></span>
                          <span className="it-btn__blob"></span>
                          <span className="it-btn__blob"></span>
                        </span>
                      </span>
                    </Link>

                    {/* <div className="volunteerUser__profile hero__profile">
                      <ul>
                        {[vlntr2, vlntr3, vlntr4, vlntr5, vlntr6, vlntr7].map(
                          (img, i) => (
                            <li key={i}>
                              <Link onClick={ClickHandler} to="/home-3">
                                <img src={img} alt="Gainioz" />
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <span className="hero__instaTitle">
                      <span>#</span> More than 2000+ People already donate us
                    </span> */}
                  </div>
                </div>

                {/* <div className="col-xl-6 mb-30">
                  <figure className="hero__figure">
                    <img
                      src={slide.img}
                      alt="Gainioz Hero"
                      className="hero__figure__thumbs"
                    />
                  </figure>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero3;
