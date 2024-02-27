import React from "react";
import "./NewItems.css";
import Thumbnail2 from "./Thumbnail2";
import "../App.css";

function NewItems() {
  return (
    <>
      <div className="thumbnail-container-container">
        <h1 id="new-items-title">New Items</h1>
        <div className="newitems-container">
          <div className="margin-bottom-40">
            <Thumbnail2
              backgroundImage="/images/truedesires.png"
              link="https://www.etsy.com/listing/1595398234/true-desires-printable-mini-oracle-deck?click_key=984eeea339332b48cae122983f761a41441bcdb2%3A1595398234&click_sum=894e0355&ref=shop_home_active_11&sts=1"
            />
            <div className="new-description-box">
              <p className="title new-item">
                True Desires Printable Oracle Deck
              </p>
              {/* <hr className="hr-3"></hr>
              <p className="new-description">Printable DIY mini oracle deck</p> */}
            </div>
          </div>

          <div className="margin-bottom-60">
            <Thumbnail2
              backgroundImage="/images/enchanted-meadow.png"
              link="https://www.etsy.com/listing/1610058297/enchanted-meadow-printable-mini-oracle?click_key=c86cf9a1f299622a0db149c8c8928c582b1002a6%3A1610058297&click_sum=8dd68310&ref=shop_home_active_12&sts=1"
            />
            <div className="new-description-box">
              <p className="title new-item">
                Enchanted Meadow Printable Oracle Deck
              </p>
              {/* <hr className="hr-3"></hr>
              <p className="new-description">Printable DIY oracle deck</p> */}
            </div>
          </div>
          <div className="margin-bottom-50">
            <Thumbnail2
              backgroundImage="/images/dear-diary.png"
              link="https://www.etsy.com/listing/1609537685/dear-diary-printable-mini-oracle-deck-no?click_key=e2af129f350bb37b6a99daa2bc72dd13a5fdf133%3A1609537685&click_sum=740df370&ref=shop_home_active_8&sts=1"
            />
            <div className="new-description-box">
              <p className="title new-item">
                Dear Diary Printable Oracle Deck
                <br />
                *No Contact*
              </p>
              {/* <hr className="hr-3"></hr>
              <p className="new-description">Printable DIY oracle deck</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewItems;
