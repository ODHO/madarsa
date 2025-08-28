import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import Services from '../../api/service'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import PartnerSection from '../PartnerSection';
import Donation from '../../api/donation'


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

const [activeFilter, setActiveFilter] = useState('all');


    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    }

    const filteredDonation = activeFilter === 'all'
        ? Donation.slice(0, 6)
        : Donation.slice(0, 6).filter(donation => donation.category === activeFilter);


    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (
<>
<div className="projects-section about position-relative pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sectionTitle text-center mb-70">
                                    {/* <span className="sectionTitle__small justify-content-center">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        Donation Listing
                                    </span> */}
                                    <h2 className="sectionTitle__big">Our Departments </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="featureTab featureTab--style2">
                                    <ul className="unordered_list">
                                        <li className={activeFilter === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')}>All</li>
                                        <li className={activeFilter === 'education' ? 'active' : ''} onClick={() => handleFilterClick('education')}>Education</li>
                                        <li className={activeFilter === 'medical' ? 'active' : ''} onClick={() => handleFilterClick('medical')}>Medical</li>
                                        <li className={activeFilter === 'Home' ? 'active' : ''} onClick={() => handleFilterClick('Home')}>Home</li>
                                        <li className={activeFilter === 'Food' ? 'active' : ''} onClick={() => handleFilterClick('Food')}>Food</li>
                                    </ul>
                                    <div className="filter_elements_wrapper row gx-3">
                                        {filteredDonation.map((donation, index) => (
                                            <div className="col-lg-4 col-sm-6 mb-35" key={index}>
                                                <div className={`featureBlock ${activeIndex === index ? "featureBlock--active" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter(index)} >
                                                    <div className="featureBlock__wrap">
                                                        <figure className="featureBlock__thumb">
                                                            <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__thumb__link">
                                                                <img src={donation.sImg} alt="Gainioz Featured Thumb" />
                                                            </Link>
                                                            <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__hashLink">
                                                                <span className="featureBlock__hashLink__text">{donation.thumb}</span>
                                                            </Link>
                                                        </figure>
                                                        <div className="featureBlock__content">
                                                            <h3 className="featureBlock__heading">
                                                                <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__heading__link">
                                                                    {donation.title}
                                                                </Link>
                                                            </h3>
                                                            <p className="featureBlock__text">
                                                                We help local nonprofits access the funding, training, and support they need to become more
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="featureBlock__donation">
                                                        <div className="featureBlock__donation__progress">
                                                            <div className="featureBlock__donation__bar">
                                                                <span className="featureBlock__donation__text skill-bar" style={{ width: donation.progress }}>{donation.progress}</span>
                                                                <div className="featureBlock__donation__line">
                                                                    <span className="skill-bars">
                                                                        <span className="skill-bars__line skill-bar" style={{ width: donation.progress }}></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="featureBlock__eqn">
                                                            <div className="featureBlock__eqn__block">
                                                                <span className="featureBlock__eqn__title">our goal</span>
                                                                <span className="featureBlock__eqn__price">{donation.goal}</span>
                                                            </div>
                                                            <div className="featureBlock__eqn__block">
                                                                <span className="featureBlock__eqn__title">Raised</span>
                                                                <span className="featureBlock__eqn__price">{donation.raised}</span>
                                                            </div>
                                                            <div className="featureBlock__eqn__block">
                                                                <span className="featureBlock__eqn__title">to go</span>
                                                                <span className="featureBlock__eqn__price">{donation.togo}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col-12">
                                            <div className="sectionButton text-center pt-15">
                                                <Link onClick={ClickHandler} className="btn btn--styleOne btn--primary it-btn" to="/volunteers">
                                                    <span className="btn__text">see all Volunteers</span>
                                                    <i className="fa-solid fa-heart btn__icon"></i>
                                                    <span className="it-btn__inner">
                                                        <span className="it-btn__blobs">
                                                            <span className="it-btn__blob"></span>
                                                            <span className="it-btn__blob"></span>
                                                            <span className="it-btn__blob"></span>
                                                            <span className="it-btn__blob"></span>
                                                        </span>
                                                    </span>
                                                    <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                        <defs>
                                                            <filter>
                                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                                                </feColorMatrix>
                                                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <section className="feature feature--bg cc-slide-wrap2 pt-130 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-55">
                        <div className="sectionTitle">
                            <span className="sectionTitle__small">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                who we are
                            </span>
                            <h2 className="sectionTitle__big">Our Projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-55">
                        <div className="sliderNav sliderNav--style1">
                            <span className="sliderNav__btn btn-prev" tabIndex="0" role="button" ref={prevRef}>
                                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.75 9.40625L6.375 8.78125C6.5 8.625 6.5 8.40625 6.34375 8.25L3.84375 5.8125H14.625C14.8125 5.8125 15 5.65625 15 5.4375V4.5625C15 4.375 14.8125 4.1875 14.625 4.1875H3.84375L6.34375 1.78125C6.5 1.625 6.5 1.40625 6.375 1.25L5.75 0.625C5.59375 0.5 5.375 0.5 5.21875 0.625L1.09375 4.75C0.96875 4.90625 0.96875 5.125 1.09375 5.28125L5.21875 9.40625C5.375 9.53125 5.59375 9.53125 5.75 9.40625Z"
                                        fill="white"></path>
                                </svg>
                            </span>
                            <span className="sliderNav__btn btn-next" tabIndex="0" ref={nextRef}>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.21875 0.625L8.59375 1.25C8.46875 1.40625 8.46875 1.625 8.625 1.78125L11.125 4.1875H0.375C0.15625 4.1875 0 4.375 0 4.5625V5.4375C0 5.65625 0.15625 5.8125 0.375 5.8125H11.125L8.625 8.25C8.46875 8.40625 8.46875 8.625 8.59375 8.78125L9.21875 9.40625C9.375 9.53125 9.59375 9.53125 9.75 9.40625L13.875 5.28125C14 5.125 14 4.90625 13.875 4.75L9.75 0.625C9.59375 0.5 9.375 0.5 9.21875 0.625Z"
                                        fill="white"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="featureActive">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={15}
                                slidesPerView={1}
                                loop={true}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    1025: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {Services.slice(3, 8).map((service, srv) => (
                                    <SwiperSlide key={srv}>
                                        <div className="keyFeatureBlock keyFeatureBlock--style3 mb-30">
                                            <div className="keyFeatureBlock__left">
                                                <span className="keyFeatureBlock__icon">
                                                    <img src={service.icon} alt="Gainioz Feature_Icon" />
                                                </span>
                                            </div>
                                            <div className="keyFeatureBlock__content">
                                                <h3 className="keyFeatureBlock__heading">
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="keyFeatureBlock__heading__link">
                                                        {service.title}
                                                    </Link>
                                                </h3>
                                                <p className="keyFeatureBlock__text">{service.description}</p>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="keyFeatureBlock__link">
                                                    <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3432 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3432 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z" fill="#BBBBBB" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <PartnerSection pClass={'pb-0 pt-80'}/>
        </section>
</>
    );
}

export default ServiceSection;