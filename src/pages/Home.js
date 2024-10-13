import React, { useEffect, useState } from "react";
import { fetchPageData } from "../services/contentfulService.js"; // Importa o serviço

import "./Home.css";
import BtnGreen from "../components/BtnGreen";
import BtnWhite from "../components/BtnWhite";
import CarouselComponent from "../components/Carousel";
import { aboutUsSections, advantages, services} from "../components/constants/index.js";

function Home() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await fetchPageData("home");
      console.log("dados retornados", result);
      setData(result);
    } catch (error) {
      console.error(`Error fetching data:`, error.response || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  // Verificando se os dados existem antes de acessar
  const homeData =
    data &&
    data.homepageCollection &&
    data.homepageCollection.items &&
    data.homepageCollection.items.length > 0
      ? data.homepageCollection.items[0]
      : null;

  if (homeData) {
    console.log("homeData", homeData);
  } else {
    console.error("homeData não encontrado ou está vazio.");
  }

  // // Supondo que o formato do `data` siga o mesmo padrão do Contentful
  // const homeData = data?.homepageCollection?.items[0];
  // console.log("homeData", homeData);

  return (
    <div>
      {/* Banner hero */}
      <div className="banner">
        <div className="content">
          <h1 className="bannerTitle">{homeData.title}</h1>
          <h5 className="bannerDescrip">{homeData.subtitle}</h5>
          <BtnGreen customButtonClass="customButtonClass">Our Services</BtnGreen>
        </div>
        <img src={homeData.heroImage.url} alt={homeData.heroImage.title}></img>
      </div>
      {/* About US */}
      <div className="about-us">
        <h2>About Us</h2>
        {aboutUsSections.map((section, index) => (
          <div
            key={index}
            className={`about-us-content ${section.containerClass}`}
          >
            <img
              src={section.imgSrc}
              alt={section.altText}
              className={`about-us-img-custom ${section.imgClass}`}
            />
            <div className={`about-us-text ${section.textClass}`}>
              <h5 className={`${section.h5Style} ${section.isButtonVisible ? '' : 'mobile-none'}`}>
                {section.title}
              </h5>
              <p className={section.isButtonVisible ? '' : 'mobile-none'}>
                {section.description}
              </p>
              {section.isButtonVisible && <BtnGreen>Learn More</BtnGreen>}
            </div>
          </div>
        ))}
      </div>
      {/* Our Services */}
      <div className="our-services">
        <h2>Our Services</h2>
        {services.map((service, index) => (
          <div className={service.containerClass} key={index}>
            <img src={service.imgSrc} alt="" />
            <div className={service.contentClass}>
              <h5 className={service.h5Style}>{service.title}</h5>
              <p>{service.description}</p>
              {service.btnComponent}
            </div>
          </div>
        ))}
      </div>
      {/* Our Advantages */}
      <div className="advantages">
        <h2>Our Advantages</h2>
        <div className="advantages-icons">
          {advantages.map((advantage, index) => (
            <div className="icon-content" key={index}>
              <img src={advantage.imgSrc} alt={advantage.altText} />
              <h6>{advantage.title}</h6>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <CarouselComponent />
      {/* Gallery */}
      <div className="our-gallery">
        <h2>Our Gallery</h2>
        <div className="gallery">
          <img src="images/our-gallery-01.webp" alt="" id="img1" />
          <img src="images/our-gallery-02.webp" alt="" id="img2" />
          <img src="images/our-gallery-03.webp" alt="" id="img3" />
          <img src="images/our-gallery-04.webp" alt="" id="img4" />
          <img src="images/our-gallery-05.webp" alt="" id="img5" />
          <img src="images/our-gallery-06.webp" alt="" id="img6" />
        </div>
      </div>
      {/* Contact Us */}

      <div className="contact">
        <h2>Contact us</h2>
        <p>Fill out the form and we will contact you as soon as possible!</p>
        <form>
          <div className="name-email">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="form-group">
              <label for="name">Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="form-group-phone">
            <label for="name">Phone</label>
            <input type="phones" placeholder="Phone" />
          </div>

          <div className="form-group">
            <label for="name">Message</label>
            <textarea placeholder="How can we help you today?"></textarea>
          </div>
          <div className="btn-send">
            <BtnWhite>Send</BtnWhite>
          </div>
        </form>
      </div>
      <div className="blank"></div>
    </div>
  );
}

export default Home;
