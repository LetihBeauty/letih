import React from "react";
import "./About.css";
import BtnGreen from "../components/BtnGreen";
import { behindTheScenes, ourMission, ourVision, qualityService, transparencyAndHonesty, warmerApproach } from "../components/constants";

const About = () => {
  return (
    <div>
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
                {ourMission}
              </p>
            </div>
            <div className="vision">
              <h4>Our Vision</h4>
              <p>
                {ourVision}
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
            {warmerApproach}
          </p>
          <h5 className="sub-title">Personalized and quality Service </h5>
          <p>
            {qualityService}
          </p>
          <h5 className="sub-title">Education, Transparency and honesty</h5>
          <p>
            {transparencyAndHonesty}
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
          <h4 className="left-title">Behind the scenes </h4>
          <p>
            {behindTheScenes}
          </p>
          <div className="btn-book">
            <BtnGreen>Book Now</BtnGreen>
          </div>
        </div>
      </div>
      <div className="bottom-images">
        <img src="/images/aboutFirst.png" alt="women1"/>
        <img src="/images/aboutus-2.png" alt="women2" />
        <img src="/images/aboutFirst.png" alt="women3" />
      </div>

    </div>
    <div className="bottomLineGreen"></div>
    <div className="bottomLineWhite"></div>
  </div>
  );
};

export default About;
