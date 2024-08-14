import React from "react";
import "./About.css";
import BtnGreen from "../components/BtnGreen";

const About = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src="/images/about-us-2.webp" alt="women" />
        <div className="we-are-letih-beauty">
          <h1>We’re LETIH BEAUTY</h1>
          <h3>Awaken Your Tropical Glow ✨</h3>
          <div className="mission-vision">
            <div className="mission">
              <h4>Our Mission</h4>
              <p>
                Providing personalized esthetics services that focus on
                detoxifying the skin and body to promote overall health and
                wellbeing.
              </p>
            </div>
            <div className="vision">
              <h4>Our Vision</h4>
              <p>
                To be the leading provider of esthetics services that promote
                detoxification, rejuvenation, and overall wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-values">
        <img src="/images/about-us-1.webp" alt="women" />
        <div className="our-values-content">
          <h4>Our Values</h4>
          <h5 className="sub-title">Warmer Approach </h5>
          <p>
            We believe in treating the whole person, focusing on mental and
            bodily well-being with a lot of attention and affection.
          </p>
          <h5 className="sub-title">Personalized and quality Service </h5>
          <p>
            We provide individualized treatments that address each client's
            unique needs and concerns, ensuring that they leave feeling
            refreshed, revitalized, and rejuvenated. Our brand offers quality
            services.
          </p>
          <h5 className="sub-title">Education, Transparency and honesty</h5>
          <p>
            We prioritize education transparency and honesty: empowering our
            clients to make informed decisions about what services and how it
            works, based on the science of the techniques of each service with
            the expectation of each client.
          </p>
        </div>
      </div>
      <div className="behind-scenes">
        <img
          className="image-letih"
          src="/images/about-us-3.webp"
          alt="women"
        />
        <div className="behind-scenes-content">
          <h3 className="left-title">Behind the scenes </h3>
          <p>
            My name is Leticia Martins. I was born in Brazil in 1993, in a small
            town in the south of the country. I come from the countryside and
            was raised with a simple life full of love and innocence. In Brazil
            in the year 2011 my journey as an Esthetician started, over 10 years
            of experience and studies in the field of beauty. In the United
            States of America, also certified and licensed as Master Esthetician
            and completed several other professional master’s courses in the
            field. My goal in this career is always seeking new techniques,
            equipment and advancements for my clients, so everyone can leave my
            space extremely satisfied. Working as an Master Esthetician is one
            of my dreams that came true and I live it everyday. Are you ready to
            elevate your natural beauty? Make you appointment today.
          </p>
          <div className="btn-book">
            <BtnGreen>Book Now</BtnGreen>
          </div>
        </div>
      </div>
      <div className="bottom-images">
        <img src="/images/about-us-4.webp" alt="women" />
        <img src="/images/about-us-5.webp" alt="women" />
        <img src="/images/about-us-6.webp" alt="women" />
      </div>
    </div>
  );
};

export default About;
