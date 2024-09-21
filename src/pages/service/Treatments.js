import React from "react";
import styles from './Treatments.module.css';
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const Treatments = ({
  title,
  whatIs,
  whatIsDescription,
  benefits,
  benefitsDescription,
  benefitsRecommendations,
  timeDescription,
  priceDescription,
  btnComponent,
  imgSrc,
  customClass,
  customTitleClass,
  customDescriptionClass,
  customBottomClass,
  customPhotoClass,
  customBannerMiddleContentDetailsClass,
  customNavWrapperClass
}) => {
  return (
    <div className={styles.containerService}>
      <div className={`${styles.mobileNavbarWrapper} ${customNavWrapperClass}`}>
        <ServiceMobileNavbar />
      </div>
      <div className={`${styles.bannerMiddle} ${customClass}`}>
        <div className={styles.bannerMiddleContent}>
          <div className={`${styles.title} ${customTitleClass}`}>
            <h2>{title}</h2>
          </div>
          <div className={`${styles.titleDescription} ${customDescriptionClass}`}>
            <h5>{whatIs}</h5>
            <p>{whatIsDescription}</p>
            <h5>{benefits}</h5>
            <p>{benefitsDescription}</p>
            <p className={styles.bannerMiddleRecommendation}>{benefitsRecommendations}</p>
            <div className={`${styles.bannerMiddleContentDetails}  ${customBannerMiddleContentDetailsClass}`}>
              <h5>Time:<span>{timeDescription}</span></h5>
              <h5>Price:<span>{priceDescription}</span></h5>
            </div>
            <div className={styles.bannerButton}>
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
