import "./Home.css";
import BtnGreen from "../components/BtnGreen";
import BtnWhite from "../components/BtnWhite";
import CarouselComponent from "../components/Carousel";
import { advantages, bellyReducing, bodyDetox, deepFacial, glowFacial, microneedling, skinCareRoutine, ultraformer, youDeserveItLeft, youDeserveItRight } from "../components/constants";

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
            <h5 className="mobile-none">You deserve it!</h5>
            <p className="mobile-none">
              {youDeserveItRight}
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
              {youDeserveItLeft}
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
            <h5 className="service-number">01</h5>
            <h5>Deep Facial</h5>
            <p>
              {deepFacial}
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 02 */}
        <div className="white-services">
          <img src="images/service-02.webp" alt="" />
          <div className="white-right">
            <h5 className="service-number">02</h5>
            <h5>Body Detox</h5>
            <p>
              {bodyDetox}
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 03 */}
        <div className="green-services">
          <img src="images/service-03.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">03</h5>
            <h5>Ultraformer III</h5>
            <p>
              {ultraformer}
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 04 */}
        <div className="white-services">
          <img src="images/service-04.webp" alt="" />
          <div className="white-right">
            <h5 className="service-number">04</h5>
            <h5>Belly Reducing</h5>
            <p>
              {bellyReducing}
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 05 */}
        <div className="green-services">
          <img src="images/service-05.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">05</h5>
            <h5>RF Microneedling</h5>
            <p>
              {microneedling}
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
        {/* WHITE 06 */}
        <div className="white-services">
          <img src="images/service-06.webp" alt="" />
          <div className="white-right">
            <h5 className="service-number">06</h5>
            <h5>Skin Care Routine</h5>
            <p>
              {skinCareRoutine}
            </p>
            <BtnGreen>Learn More</BtnGreen>
          </div>
        </div>
        {/* GREEN 07 */}
        <div className="green-services">
          <img src="images/service-07.webp" alt="" />
          <div className="green-right">
            <h5 className="service-number">07</h5>
            <h5>Glow Facial</h5>
            <p>
              {glowFacial}
            </p>
            <BtnWhite>Learn More</BtnWhite>
          </div>
        </div>
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
