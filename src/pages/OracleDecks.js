import React, { useState } from "react";
import Thumbnail from "../components/Thumbnail";
import "../components/Thumbnail.css";
import "./OracleDecks.css";
import "../App.css";
import Footer from "../components/Footer";

function OracleDecks() {
  // const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

  // const handleThumbnailHover = (index) => {
  //   setHoveredThumbnail(index);
  // };

  // const handleThumbnailLeave = () => {
  //   setHoveredThumbnail(null);
  // };
  return (
    <>
      <div className="container">
        <h1 className="page-title effect">Printable Oracle Decks</h1>
        <hr className="title-hr"></hr>
        <div className="stars">
          <div className="twinkling box">
            <div
              className="thumbnail-container3"
              // onMouseEnter={() => handleThumbnailHover(0)}
              // onMouseLeave={handleThumbnailLeave}
            >
              <div>
                <Thumbnail
                  backgroundImage="/images/enchanted-meadow.png"
                  link="https://www.etsy.com/listing/1610058297/enchanted-meadow-printable-mini-oracle?click_key=c86cf9a1f299622a0db149c8c8928c582b1002a6%3A1610058297&click_sum=8dd68310&ref=shop_home_active_12&sts=1"
                />
                <div className="description-box">
                  <p className="title">Enchanted Meadow Oracle</p>
                  <hr className="hr-3"></hr>
                  <p className="description">This is the listing description</p>
                </div>
              </div>
              <div>
                <Thumbnail
                  backgroundImage="/images/dear-diary.png"
                  link="https://www.etsy.com/listing/1609537685/dear-diary-printable-mini-oracle-deck-no?click_key=e2af129f350bb37b6a99daa2bc72dd13a5fdf133%3A1609537685&click_sum=740df370&ref=shop_home_active_8&sts=1"
                />
                <div className="description-box">
                  <p className="title">Dear Diary - No Contact</p>
                  <hr className="hr-3"></hr>
                  <p className="description">This is the listing description</p>
                </div>
              </div>
              <div>
                <Thumbnail
                  backgroundImage="/images/true-desires.png"
                  link="https://www.etsy.com/listing/1595398234/true-desires-printable-mini-oracle-deck?click_key=984eeea339332b48cae122983f761a41441bcdb2%3A1595398234&click_sum=894e0355&ref=shop_home_active_11&sts=1"
                />
                <div className="description-box">
                  <p className="title">True Desires Oracle</p>
                  <hr className="hr-3"></hr>
                  <p className="description">This is the listing description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OracleDecks;
