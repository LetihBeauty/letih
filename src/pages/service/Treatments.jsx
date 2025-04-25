import React from "react";
// import DOMPurify from "dompurify";
import styles from "./Treatments.module.css";
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";
import Btn from "../../components/Btn.js";
import booknow from "../../data.json";

const Treatments = ({
  title,
  whatIsDescription,
  custombannerMiddleContentClass,
  imgSrc,
  description,
  customBottomClass,
  customNavWrapperClass,
}) => {
  const bookNowUrl = booknow.bookNow;

  return (
    <>
      <div className={styles.containerService}>
        <div
          className={`${styles.mobileNavbarWrapper} ${customNavWrapperClass}`}
        >
          <ServiceMobileNavbar />
        </div>
        <div className={styles.bannerMiddle}>
          <div
            className={`${styles.bannerMiddleContent} ${custombannerMiddleContentClass}`}
          >
            {title && <h2 className={styles.title}>{title}</h2>}

            <div
              className={`${styles.titleDescription}`}
              dangerouslySetInnerHTML={{ __html: whatIsDescription }}
            ></div>

            <Btn href={bookNowUrl} customButtonClass="green" target="_blank">
              Book Now
            </Btn>
          </div>

          {imgSrc && (
            <div className={`${styles.bannerMiddlePhoto}`}>
              <img
                src={imgSrc}
                alt={
                  description
                    ? description
                    : title
                    ? `Image for ${title}`
                    : "Treatment image"
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.bannerBottom} ${customBottomClass}`}></div>
    </>
  );
};

export default Treatments;
