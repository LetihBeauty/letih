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
 * - secondTitle etc
 *
 * By using this method, the component remains flexible and can be easily adapted to display various
 * combinations of treatment details without cluttering the rendered output with unnecessary elements.
 *
 * Example of Conditional Rendering:
 * {title && <h2>{title}</h2>} // Renders the title only if it exists
 * {whatIs && <h5>{whatIs}</h5>} // Renders the "what is" description only if it exists
 *
 * Styled Session Component:
 *
 * The component also utilizes a styled session wrapper for displaying specific sections of the treatment details:
 *
 * const StyledSession = ({ children }) => (
 *   <h5 className={styles.sessionTitle}>
 *     <span className={styles.descriptionStyle}>{children}</span>
 *   </h5>
 * );
 *
 * The **StyledSession** component serves as a consistent styling wrapper for various treatment detail sections.
 * By encapsulating the content within this component, we ensure that the text maintains a uniform appearance across
 * different parts of the UI. This enhances the overall readability and organization of the treatment information.
 *
 * The **StyledSession** component is particularly useful for rendering props such as:
 * - **firstSession**
 * - **firstSessionTime**
 * - **secondSession**
 * - **secondSessionUlProp**
 * - **secondSessionTime**
 * - **priceProp**
 *
 * By using **StyledSession**, we can easily apply the same styles and structure to these elements, promoting
 * visual coherence. This approach is beneficial when additional props are passed, as it maintains the desired
 * styling regardless of the content being rendered. It also simplifies future modifications; any style changes
 * can be made in one place without needing to update multiple lines throughout the component.
 *
 * Example of Using StyledSession:
 * <StyledSession>{firstSession}</StyledSession>
 * <StyledSession>{firstSessionTime}</StyledSession>
 *
 * This pattern allows for a cleaner and more maintainable codebase while providing a consistent user experience.
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
  custombannerMiddleContentClass,
  benefits= '',
  benefitsDescription= '',
  benefitsRecommendations= '',
  whatContains,
  whatContainsUlProps,
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
  packagePriceProp= '',
  firstSession='',
  firstSessionTime='',
  secondSessionTitle='',
  secondSessionDescription='',
  secondSessionUlProp='',
  secondSessionTime='',
  priceProp='',
  customBannerMiddleContentDetailsClass='',
  firstSessionDescription='',
  firstSessionTimeDescription='',
  pricePropDescription='',
  secondSessionTimeDescription='',
  customdescriptionStyleClass='',
  packagePricePropDescription='',

}) => {
  const StyledSession = ({ children }) => (
    <h5 className={styles.sessionTitle}>
      <span className={`${styles.descriptionStyle} ${customdescriptionStyleClass}`}>{children}</span>
    </h5>
  );
  return (
    <div className={styles.containerService}>
      <div className={`${styles.mobileNavbarWrapper} ${customNavWrapperClass}`}>
        <ServiceMobileNavbar />
      </div>
      <div className={styles.bannerMiddle}>
        <div className={`${styles.bannerMiddleContent} ${custombannerMiddleContentClass}`}>
          <div className={styles.title}>
            {title &&<h2>{title}</h2>}
          </div>
          <div className={`${styles.titleDescription} ${customDescriptionClass}`}>
            {whatIs &&<h5>{whatIs}</h5>}
            {whatIsDescription &&<p>{whatIsDescription}</p>}
            {whatContains &&<h5>{whatContains}</h5>}
            {whatContainsUlProps}
            {benefits &&<h5>{benefits}</h5>}
            {benefitsDescription && <p>{benefitsDescription}</p>}
            {customListProp}
            {additionalWhatIsDescriptionProp &&<p>{additionalWhatIsDescriptionProp}</p>}
            {children}
            {benefitsRecommendations &&
              <p className={styles.bannerMiddleRecommendation}>
                {benefitsRecommendations}
              </p>}
            <div className={`${styles.bannerMiddleContentDetails} ${customBannerMiddleContentDetailsClass}`}>
              {firstSession && (
                <StyledSession>
                  {firstSession}
                  <p>{firstSessionDescription}</p>
                </StyledSession>
              )}
              {firstSessionTime && (
                <StyledSession>
                  {firstSessionTime}
                  <p>{firstSessionTimeDescription}</p>
                </StyledSession>
              )}
              {secondSessionTitle && (
                <StyledSession>
                  {secondSessionTitle}
                  <p>{secondSessionDescription}</p>
                </StyledSession>
              )}
              {secondSessionUlProp &&<StyledSession>{secondSessionUlProp}</StyledSession>}
              {secondSessionTime && (
                <StyledSession>
                  {secondSessionTime}
                  <p>{secondSessionTimeDescription}</p>
                </StyledSession>
              )}
              {priceProp && (
                <StyledSession>
                  {priceProp}
                  <p>{pricePropDescription}</p>
                </StyledSession>
              )}
              {firstTitle && (
                <StyledSession >
                  {firstTitle}
                  <p>{firstTitleDescription}</p>
                </StyledSession>
              )}
              {secondTitle && (
                <StyledSession>
                  {secondTitle}
                  <p>{secondTitleDescription}</p>
                </StyledSession>
              )}
              {packagePriceProp && (
                <StyledSession>
                  {packagePriceProp}
                  <p>{packagePricePropDescription}</p>
                </StyledSession>
              )}
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
