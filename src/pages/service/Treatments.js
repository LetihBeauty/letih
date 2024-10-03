/**
 * Treatments Component
 *
 * The Treatments component is designed to display detailed information about a specific treatment,
 * including its title, description, benefits, and related details. It incorporates a responsive
 * mobile navigation bar and supports dynamic rendering of various sections based on the props passed.
 *
 * Props:
 * - title (string): The main title of the treatment.
 * - whatIs (string): A brief description of what the treatment entails.
 * - whatIsDescription (string): Additional details about the treatment.
 * - benefits (string): The key benefits of undergoing the treatment.
 * - benefitsDescription (string): A detailed description of the treatment benefits.
 * - benefitsRecommendations (string): Recommendations related to the benefits.
 * - firstTitle (string): Title for the first additional detail section.
 * - firstTitleDescription (string): Description corresponding to the first title.
 * - secondTitle (string): Title for the second additional detail section.
 * - secondTitleDescription (string): Description corresponding to the second title.
 * - btnComponent (ReactNode): A custom button component to be rendered.
 * - customButtonClass (string): Custom CSS class for styling the button.
 * - imgSrc (string): URL for the treatment's image.
 * - customDescriptionClass (string): Custom CSS class for the description section.
 * - customBottomClass (string): Custom CSS class for the bottom section of the component.
 * - customPhotoClass (string): Custom CSS class for the photo section.
 * - customNavWrapperClass (string): Custom CSS class for the mobile navbar wrapper.
 * - additionalWhatIsDescriptionProp (ReactNode): Additional content to be rendered in the "What Is" section.
 * - children (ReactNode): Any child components passed to be rendered within the component.
 * - packagePriceProp (ReactNode): Details about the price of the treatment package.
 *
 * Usage:
 * This component can be utilized in various parts of the application where treatment information
 * needs to be displayed. By passing the appropriate props, the component dynamically adjusts
 * its rendered content to suit different treatments.
 *
 * Accessibility:
 * The component includes appropriate alt text for images, improving accessibility for users
 * with visual impairments. Ensure that alt descriptions are meaningful and contextually relevant.
 *
 * Example:
 * <Treatments
 *   title="Laser Treatment"
 *   whatIs="A procedure to remove unwanted hair..."
 *   benefits="Smooth skin, permanent hair reduction..."
 *   imgSrc="/images/laser-treatment.jpg"
 *   btnComponent={<CustomButton label="Book Now" />}
 * />
 */
import React from "react";
import styles from './Treatments.module.css';
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const Treatments = ({
  title = '',
  whatIs  = '',
  whatIsDescription = '',
  benefits= '',
  benefitsDescription= '',
  benefitsRecommendations= '',
  firstTitle= '',
  firstTitleDescription= '',
  secondTitle= '',
  secondTitleDescription= '',
  btnComponent= '',
  customButtonClass= '',
  imgSrc= '',
  customDescriptionClass= '',
  customBottomClass= '',
  customPhotoClass= '',
  customNavWrapperClass= '',
  additionalWhatIsDescriptionProp= '',
  children= '',
  packagePriceProp= ''
}) => {
  return (
    <div className={styles.containerService}>
      <div className={`${styles.mobileNavbarWrapper} ${customNavWrapperClass}`}>
        <ServiceMobileNavbar />
      </div>
      <div className={styles.bannerMiddle}>
        <div className={styles.bannerMiddleContent}>
          <div className={styles.title}>
            {title &&<h2>{title}</h2>}
          </div>
          <div className={`${styles.titleDescription} ${customDescriptionClass}`}>
            {whatIs &&<h5>{whatIs}</h5>}
            {whatIsDescription &&<p>{whatIsDescription}</p>}
            {benefits &&<h5>{benefits}</h5>}
            {benefitsDescription && <p>{benefitsDescription}</p>}
            {additionalWhatIsDescriptionProp}
            {children}
            {benefitsRecommendations && <p className={styles.bannerMiddleRecommendation}>{benefitsRecommendations}</p>}
            <div className={styles.bannerMiddleContentDetails}>
              {firstTitle &&<h5>{firstTitle}<span>{firstTitleDescription}</span></h5>}
              {secondTitle &&<h5>{secondTitle}<span>{secondTitleDescription}</span></h5>}
              {packagePriceProp}
            </div>
            <div className={`${styles.bannerButton} ${customButtonClass}`}>
              {btnComponent}
            </div>
          </div>
          <div className={`${styles.bannerMiddlePhoto}  ${customPhotoClass}`}>
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
      <div className={`${styles.bannerBottom} ${customBottomClass}`}></div>
    </div>
  );
};

export default Treatments;
