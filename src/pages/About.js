import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="hero">
        <img src="/images/about-us-2.webp" alt="women" />
        <div className="we-are-letih-beauty">
          <h2>We’re LETIH BEAUTY</h2>
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
    </div>
  );
};

export default About;
