import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="stars">
        <div className="twinkling banner">
          <p className="banner-heading mb-2">
            Get answers to your burning questions from an experienced tarot
            reader.
          </p>
          <p className="banner-heading-2">
            ⋆⁺₊⋆ ☾ Crystal’s Magick Corner ☽ ⋆⁺₊⋆
          </p>
          <button className="learn-more">
            <span className="arrow">⇩</span> learn more
            <span className="arrow"> ⇩</span>
          </button>
        </div>
      </div>
      {/* <img src="/images/banner3.png" alt="banner" /> */}
    </>
  );
}

export default Banner;
