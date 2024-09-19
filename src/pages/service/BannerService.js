import React from "react";
import styles from './BannerService.module.css';
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";

const BannerService = ({
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
  customDescriptionClass,
  customBottomClass,
  customPhotoClass
}) => {
  return (
    <div className={styles.containerService}>
      <div className={styles.mobileNavbarWrapper}>
        <ServiceMobileNavbar />
      </div>
      <div className={`${styles.bannerMiddle} ${customClass}`}>
        <div className={styles.bannerMiddleContent}>
          {/* <div className={styles.title}>
            <h2>{title}</h2>
          </div> */}
          <div className={`${styles.titleDescription} ${customDescriptionClass}`}>
            {/* <div className={styles.title}> */}
              <h2>{title}</h2>
            {/* </div> */}
            <h5>{whatIs}</h5>
            <p>{whatIsDescription}</p>
            <h5>{benefits}</h5>
            <p>{benefitsDescription}</p>
            <p className={styles.bannerMiddleRecommendation}>{benefitsRecommendations}</p>
            <div className={styles.bannerMiddleContentDetails}>
              <div>
                <h5>Time:</h5>
                <p>{timeDescription}</p>
              </div>
              <div>
                <h5>Price:</h5>
                <p>{priceDescription}</p>
              </div>
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

export default BannerService;