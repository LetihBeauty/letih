import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

function CarouselComponent() {
  return (
    <Carousel>
      {/* First */}
      <Carousel.Item>
        <div className="testimonial-container">
          <img src="images/testimonial.webp" alt="" />
          <div className="testimonial-content">
            <Carousel.Caption>
              <h1 id="title">Testimonials</h1>
              <h4>Briefly title about the customer review</h4>
              <p>
                "Lorem ipsum dolor sit amet consectetur. Nibh adipiscing a sit
                libero proin. Nec enim ornare elementum nulla in. Nec vulputate
                Lorem ipsum dolor sit amet consectetur. Nibh adipiscing a sit
                libero proin. Nec enim ornare elementum nulla in. Nec vulputate"
              </p>
              <p>- Customer Name</p>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      {/* Second */}
      <Carousel.Item>
        <div className="testimonial-container">
          <img src="images/testimonial.webp" alt="" />
          <div className="testimonial-content">
            <Carousel.Caption>
              <h1 id="title">Testimonials</h1>
              <h4>Briefly title about the customer review</h4>
              <p>
                "Lorem ipsum dolor sit amet consectetur. Nibh adipiscing a sit
                libero proin. Nec enim ornare elementum nulla in. Nec vulputate
                Lorem ipsum dolor sit amet consectetur. Nibh adipiscing a sit
                libero proin. Nec enim ornare elementum nulla in. Nec vulputate"
              </p>
              <p>- Customer Name</p>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      {/* Third */}
      <Carousel.Item>
        <div className="testimonial-container">
          <img src="images/testimonial.webp" alt="" />
          <div className="testimonial-content">
            <Carousel.Caption>
              <h1 id="title">Testimonials</h1>
              <h4>Briefly title about the customer review</h4>
              <p>
                "Lorem ipsum dolor sit amet consectetur. Nibh adipiscing a sit
                libero proin. Nec enim ornare elementum nulla in. Nec vulputate
                Lorem ipsum dolor sit amet consectetur. Nibh adipiscing a sit
                libero proin. Nec enim ornare elementum nulla in. Nec vulputate"
              </p>
              <p>- Customer Name</p>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
