import React from "react";
import { Link } from "react-router-dom";
import hero_section_img from "../imgs/hero-section-img.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
const HeroSection = () => {
  let categories = [
    { uri: "", title: "Design & Multimedia", delay: 300 },
    { uri: "", title: "Web & Software", delay: 300 },
    { uri: "", title: "Digital Marketing", delay: 300 },
    { uri: "", title: "Cyber Security", delay: 300 },
    { uri: "", title: "Networking Technology", delay: 300 },
    { uri: "", title: "Film & Media", delay: 300 },
    { uri: "", title: "Robotics & Automation", delay: 300 },
    { uri: "", title: "Clouding Computing", delay: 300 },
  ];

  const swiperOptions = {
    spaceBetween: 55,
    navigation: true,
    modules: [Navigation],
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  const slideStyle = {
    width: `calc((100% - ${
      (swiperOptions.slidesPerView - 1) * swiperOptions.spaceBetween
    }px) / ${swiperOptions.slidesPerView})`,
  };
  return (
    <>
      <main
        style={{
          background:
            "linear-gradient(145deg, rgba(108,99,255,1) 0%, rgba(47,56,129,1) 35%, rgba(3,25,38,1) 100%)",
        }}
      >
        <div className="hero-section container m-auto row">
          {/* text container */}
          <div
            className="col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column texts"
            data-aos="fade-up"
          >
            <h3 className="h3"> Start Your Career</h3>
            <h2 className="h2">By Learning</h2>
            <h1 className="h1 text-light">Skills.</h1>
          </div>
          {/* img container */}
          <div
            className="col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column img-container my-1"
            data-aos="fade-down"
          >
            <img loading="lazy" src={hero_section_img} alt="..." />
          </div>
        </div>
      </main>

      <section className="category-slider">
        <Swiper {...swiperOptions} className="mySwiper container px-5 py-3">
          {categories.map((item, i) => {
            return (
              <>
                <SwiperSlide key={i} style={slideStyle} className="flex">
                  <Link to="">
                    <div
                      className="card flex"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-center"
                      data-aos-delay={item.delay}
                    >
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
