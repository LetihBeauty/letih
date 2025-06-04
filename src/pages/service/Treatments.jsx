import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styles from "./Treatments.module.css";
import ServiceMobileNavbar from "../../components/ServiceNavBar.js";
import BtnGreen from "../../components/BtnGreen";

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
  const htmlString = documentToHtmlString(whatIsDescription);

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
              dangerouslySetInnerHTML={{ __html: htmlString }}
            ></div>

            <BtnGreen
              href="https://linktr.ee/letihbeauty?fbclid=PAZXh0bgNhZW0CMTEAAaZFH8U8o3AKmjeYzclFsrxCiOww4n79CtIQURzxz6uY3hKgtG0KfPOEJ_8_aem_rRU86kn6hJ7eEReWGb7xKg"
              customButtonClass="green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </BtnGreen>
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
    </>
  );
};

export default Treatments;
