import React from "react";
import { FaReact, FaCode, FaLaptopCode } from "react-icons/fa";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews and Achievements</h5>
      <h2>Testimonials</h2>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container testimonials_container mySwiper"
      >
        {/* React Certification */}
        <SwiperSlide className="testimonial">
          <div className="client_icon">
            <FaReact size={40} className="testimonial_icon" />
          </div>
          <h5 className="client_name">React Certification</h5>
          <small className="client_review">
            "Sourav showcased excellent knowledge of React fundamentals and 
            modern web development concepts through various hands-on projects."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_icon">
            <FaCode size={40} className="testimonial_icon" />
          </div>
          <h5 className="client_name">MERN Stack Bootcamp</h5>
          <small className="client_review">
            "Graduated from the MERN Stack Bootcamp, demonstrating a strong grasp
            of full-stack development and the ability to create scalable applications."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_icon">
            <FaLaptopCode size={40} className="testimonial_icon" />
          </div>
          <h5 className="client_name">Project Excellence</h5>
          <small className="client_review">
            "Developed impactful projects like Netflix Clone, Chat App, and 
            Instagram Clone, showcasing expertise in real-time communication
            and UI/UX design."
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
