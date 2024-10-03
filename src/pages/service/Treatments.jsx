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
 * Rendering Logic:
 * The component uses conditional rendering to dynamically display content based on the presence of props.
 * For example, the expression `title && <h2>{title}</h2>` checks if the `title` prop has a truthy value.
 * If it does, the `<h2>` element containing the title is rendered; otherwise, nothing is rendered.
 * This approach helps prevent rendering empty elements and keeps the UI clean.
 *
 * This pattern is applied consistently throughout the component for other props, such as:
 * - whatIs
 * - whatIsDescription
 * - benefits
 * - benefitsDescription
 * - benefitsRecommendations
 * - firstTitle
 * - secondTitle
 *
 * By using this method, the component remains flexible and can be easily adapted to display various
 * combinations of treatment details without cluttering the rendered output with unnecessary elements.
 *
 * Example of Conditional Rendering:
 * {title && <h2>{title}</h2>} // Renders the title only if it exists
 * {whatIs && <h5>{whatIs}</h5>} // Renders the "what is" description only if it exists
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
  customMiddleRecommendationClass,
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
  customListProp= '',
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
            {customListProp}
            {additionalWhatIsDescriptionProp}
            {children}
            {benefitsRecommendations &&
              <p className={styles.bannerMiddleRecommendation}>
                {benefitsRecommendations}
              </p>}
            <div className={styles.bannerMiddleContentDetails}>
              {firstTitle &&
              <h5>{firstTitle}
                <span className={styles.descriptionStyle}>
                  <p>
                    {firstTitleDescription}
                  </p>
                </span>
              </h5>}
              {secondTitle &&
                <h5>{secondTitle}
                  <span className={styles.descriptionStyle}>
                    <p>
                      {secondTitleDescription}
                    </p>
                  </span>
                </h5>}
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
