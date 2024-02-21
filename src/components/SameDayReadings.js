import React from "react";
import "./SameDayReadings.css";
import Thumbnail from "../components/Thumbnail";
import "../components/Thumbnail.css";
import "../App.css";

function SameDayReadings() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <p className="sameday-title h2-2">Same Day Readings</p>
          <p className="delivery-time">(24hr delivery)</p>
          <div className="thumbnail-container">
            <div>
              <Thumbnail
                backgroundImage="/images/sameday1.png"
                link="https://www.etsy.com/listing/1452630681/how-do-they-really-feel-same-day-psychic?click_key=9deca9b564183d514c0cb7cb9d3c07fb109fb536%3A1452630681&click_sum=4ca87dda&ref=shop_home_active_1&crt=1&sts=1"
              />
              <div className="description-box">
                <p className="title">How do they really feel?</p>
                <hr className="hr-3"></hr>
                <p className="description">
                  This reading will provide insight into the person on your mind
                  and how they truly feel about you.
                </p>
              </div>
            </div>
            <div>
              <Thumbnail
                backgroundImage="/images/sameday2.png"
                link="https://www.etsy.com/listing/1438418684/no-contact-same-day-psychic-tarot?click_key=1f3440b7fed68d0402f4b2598d94b7187c6051de%3A1438418684&click_sum=e12c04ab&ref=shop_home_recs_3&sts=1"
              />
              <div className="description-box">
                <p className="title">Do they still think about you?</p>
                <hr className="hr-3"></hr>
                <p className="description">
                  This reading will provide insight into a situation with
                  someone you are no longer in contact with and whether or not
                  this person still thinks about you.
                </p>
              </div>
            </div>
            <div>
              <Thumbnail
                backgroundImage="/images/sameday3.png"
                link="https://www.etsy.com/listing/1452623439/who-is-thinking-about-you-and-why-same?click_key=25502a93cf12225d78aa7ebf7f13af61e66bfabc%3A1452623439&click_sum=18534796&ref=shop_home_recs_7&crt=1&sts=1"
              />
              <div className="description-box">
                <p className="title">Who is thinking about you?</p>
                <hr className="hr-3"></hr>
                <p className="description">
                  This reading will describe who is currently thinking about you
                  and why you're on this person's mind.
                </p>
              </div>
            </div>
            <div>
              <Thumbnail
                backgroundImage="/images/sameday4.png"
                link="https://www.etsy.com/listing/1287721504/same-day-psychic-tarot-reading-1?click_key=60a189a635de2b4a8c319699b3ccb2a4d2a7994f%3A1287721504&click_sum=18d98e27&ref=shop_home_recs_2&crt=1&sts=1"
              />

              <div className="description-box">
                <p className="title">One Question Reading</p>
                <hr className="hr-3"></hr>
                <p className="description">
                  Get an answer to one question of your choice - see listing
                  description for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SameDayReadings;
