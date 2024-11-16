import React, { useEffect, useState } from "react";
import { fetchPageData } from "../services/contentfulService.js"; // Importa o serviço

import "./Home.css";
import BtnGreen from "../components/BtnGreen";
import Btn from "../components/Btn";
import BtnWhite from "../components/BtnWhite";
import Testimonials from "../components/Testimonials.js";
import { aboutUsSections, advantages } from "../components/constants/index.js";

function Home() {
  const [data, setData] = useState(null);

  const aboutUsSection = aboutUsSections;
  // console.log("aboutUsSections", aboutUsSections);

  const getData = async () => {
    try {
      const result = await fetchPageData("home");
      // console.log("dados retornados no home", result);
      setData(result.data);
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

  // if (homeData) {
  //   console.log("homeData", homeData);
  // } else {
  //   console.error("homeData não encontrado ou está vazio.");
  // }

  const testimonialData = homeData.testimonialsCollection.items;
  // console.log(
  //   "Dados retornados no testimonialsCollection:",
  //   testimonialData.items
  // );

  return (
    <>
      <div>
        {/* Banner hero */}
        <div className="banner">
          <div className="content">
            <h1 className="bannerTitle">{homeData.title}</h1>
            <h5 className="bannerDescrip">{homeData.subtitle}</h5>
            <Btn customButtonClass="green">Our Services</Btn>
          </div>
          {/* Hero image */}
          <img
            src={homeData.heroImage.url}
            alt={homeData.heroImage.title}
          ></img>
        </div>{" "}
        {/* About Us */}
        <div className="about-us">
          <h2>About Us</h2>
          {/* top left */}
          <div className={`about-us-content about-us-top`}>
            <img
              src={homeData.aboutUsImageOne.url}
              alt={homeData.aboutUsImageOne.title}
              className={`about-us-img-custom about-us-img-left`}
            />
            <div className={`about-us-text about-us-top-right`}>
              <h5 className={`special-style ${false ? "" : "mobile-none"}`}>
                {homeData.aboutUsTitleOne ? homeData.aboutUsTitleOne : ""}
              </h5>
              <p
                className={true ? "" : "mobile-none"}
                dangerouslySetInnerHTML={{
                  __html: homeData.aboutUsParagraphOne.json.content[0]
                    .content[0].value
                    ? homeData.aboutUsParagraphOne.json.content[0].content[0]
                        .value
                    : "",
                }}
              ></p>
              {aboutUsSection.isButtonVisible && (
                <Btn customButtonClass="green">Learn More</Btn>
              )}
            </div>
          </div>
          {/* botton right */}
          <div className={` about-us-bottom`}>
            <img
              src={homeData.aboutUsImageTwo.url}
              alt={homeData.aboutUsImageTwo.title}
              className={`about-us-img-custom about-us-img-left`}
            />
            <div className={`about-us-text about-us-bottom-left`}>
              <h5 className={`special-style ${false ? "" : "mobile-none"}`}>
                {homeData.aboutUsTitleTwo ? homeData.aboutUsTitleTwo : ""}
              </h5>
              <p
                className={true ? "" : "mobile-none"}
                dangerouslySetInnerHTML={{
                  __html: homeData.aboutUsParagraphTwo.json.content[0]
                    .content[0].value
                    ? homeData.aboutUsParagraphTwo.json.content[0].content[0]
                        .value
                    : "",
                }}
              ></p>

              <Btn
                customButtonClass="green"
                href={homeData.urlAboutUs}
                target="_blank"
              >
                Learn More
              </Btn>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="our-services">
        <h2>Our Services</h2>
        {homeData.ourServicesCollection.items.map((service, index) => {
          const colorStyle =
            index % 2 === 0 ? "green-services" : "white-services";

          const buttonStyle = index % 2 === 0 ? "white" : "green";

          return (
            <div className={`our-services ${colorStyle}`} key={index}>
              <img
                src={service.image.url}
                alt={service.image.title}
                className="service-image"
              />
              <div className="service-content">
                <h5>{service.title}</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: service.paragraphy.json.content[0].content[0].value
                      ? service.paragraphy.json.content[0].content[0].value
                      : "",
                  }}
                ></p>
                <Btn
                  href={`/service/${service.slug}`}
                  customButtonClass={buttonStyle}
                >
                  Learn More
                </Btn>
              </div>
            </div>
          );
        })}
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
      <Testimonials testimonialData={testimonialData} />

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
            <Btn customButtonClass="white">Send</Btn>
          </div>
        </form>
      </div>
      <div className="blank"></div>
    </>
  );
}

export default Home;
