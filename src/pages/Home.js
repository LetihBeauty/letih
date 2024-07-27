import "./Home.css";
import BtnGreen from "../components/BtnGreen";
import BtnWhite from "../components/BtnWhite";
import CarouselComponent from "../components/Carousel";
console.log(BtnWhite);

function Home() {
  return (
    <div>
      {/* Banner hero */}
      <div className="banner">
        <div class="content">
          <h1>ELEVATE YOUR ELEGANCE</h1>
          <h4>Unveil Your Beauty with Us</h4>
          <BtnGreen>Our Services</BtnGreen>
        </div>
        <img src="images/hero-women-leaf.webp" alt="Women with leaf"></img>
      </div>
      {/* About US */}
      <div className="about-us">
        <h2>About Us</h2>
        <div className="about-us-top about-us-content">
          <img
            src="images/home-about-us-women.webp"
            alt="women with leaf in her hair"
          />
          <div className="about-us-top-right">
            <h5>You deserve it!</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Et potenti nulla tellus praesent
              euismod commodo pretium. Et potenti nulla tellus praesent euismod
              commodo pretium. Et potenti nulla tellus praesent euismod commodo
              pretium. Et potenti nulla tellus praesent euismod commodo pretium.
            </p>
          </div>
        </div>
        <div className="about-us-button about-us-content">
          <img
            src="images/home-about-us-bed.webp"
            alt="women with leaf in her hair"
          />
          <div className="about-us-button-left">
            <h5>You deserve it!</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Et potenti nulla tellus praesent
              euismod commodo pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div className="our-services">
        <h2>Our Services</h2>
        {/* GREEN 01 */}
        <div className="green-services">
          <img src="images/service-01.webp" alt="" />
          <div className="green-right">
            <h5>01</h5>
            <h5>Deep Facial</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 02 */}
        <div className="white-services">
          <img src="images/service-02.webp" alt="" />
          <div className="white-right">
            <h5>02</h5>
            <h5>Body Detox</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 03 */}
        <div className="green-services">
          <img src="images/service-03.webp" alt="" />
          <div className="green-right">
            <h5>03</h5>
            <h5>Ultraformer III</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 04 */}
        <div className="white-services">
          <img src="images/service-04.webp" alt="" />
          <div className="white-right">
            <h5>04</h5>
            <h5>Belly Reducing</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 05 */}
        <div className="green-services">
          <img src="images/service-05.webp" alt="" />
          <div className="green-right">
            <h5>05</h5>
            <h5>RF Microneedling</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 06 */}
        <div className="white-services">
          <img src="images/service-06.webp" alt="" />
          <div className="white-right">
            <h5>06</h5>
            <h5>Skin Care Routine</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 07 */}
        <div className="green-services">
          <img src="images/service-07.webp" alt="" />
          <div className="green-right">
            <h5>07</h5>
            <h5>Glow Facial</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere
              ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae
              eget tempor non eu sed massa velit. Et potenti nulla tellus
              praesent euismod commodo pretium. Vivamus vitae eget tempor non eu
              sed massa velit. Et potenti nulla tellus praesent euismod commodo
              pretium.
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
      </div>
      {/* Our Advantages */}
      <div className="advantages">
        <h2>Our Advantages</h2>
        <div className="advantages-icons">
          {/* Flexibility */}
          <div className="icon-content">
            <img src="images/icon_history.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
          {/* Transparency */}
          <div className="icon-content">
            <img src="images/icon_page_search.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
          {/* Quality */}
          <div className="icon-content">
            <img src="images/icon_data_quality.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
          {/* Promoting Wlliness */}
          <div className="icon-content">
            <img src="images/icon_spa.svg" alt="" />
            <h6>Flexibility</h6>
            <p>
              Our commitment is to provide an unparalleled quality of service to
              our clients, setting new industry standards.
            </p>
          </div>
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
    </div>
  );
}

export default Home;
