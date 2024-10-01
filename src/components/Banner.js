import React from "react";
import "../shared/common.css";

const Banner = ({
  bannerTitle
}) => {
  return (
    <div className="globalBanner">
        <div className="globalCenterLogo">
          <h1>{bannerTitle}</h1>
        </div>
      </div>
  );
};

export default Banner;
