import React from "react";
import "./TarotReadings.css";
import Thumbnail from "../components/Thumbnail";
import "../components/Thumbnail.css";
import "../App.css";
import Footer from "../components/Footer";
import SameDayReadings from "../components/SameDayReadings";

function TarotReadings() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <div className="container">
            {/* <h1 className="page-title effect white">Get a Reading</h1> */}
            {/* <hr className="title-hr hr-2"></hr> */}

            <SameDayReadings />
            {/* <div className="box-outline"> */}
            <h2 className="other-title white h2-2">Other Readings</h2>
            <p className="delivery-time2 white">(2-4 day delivery)</p>

            <div className="thumbnail-container">
              <div className="margin-bottom-90">
                <Thumbnail
                  backgroundImage="/images/lovereading.png"
                  link="https://www.etsy.com/listing/1289941298/how-do-they-really-feel-tarot-love?click_key=2ce98f9a67de18f0d175705b34e97e53694f66a1%3A1289941298&click_sum=82e613dc&ref=shop_home_active_8&crt=1&sts=1"
                />
                <div className="description-box">
                  <p className="title">How do they really feel?</p>
                  <hr className="hr-3"></hr>
                  <p className="description">
                    Get insight into how the person on your mind is feeling
                    about you.
                  </p>
                </div>
              </div>
              <div className="margin-bottom-90">
                <Thumbnail
                  backgroundImage="/images/nocontact.png"
                  link="https://www.etsy.com/listing/1385179211/no-contact-psychic-tarot-reading-do-they?click_key=80fc4e4fdb625300ed16a58e721e8599e40ec2df%3A1385179211&click_sum=4e2ef2be&ref=shop_home_active_6&crt=1&sts=1"
                />
                <div className="description-box">
                  <p className="title">Do they still think about you?</p>
                  <hr className="hr-3"></hr>
                  <p className="description">
                    Learn whether the person on your mind still thinks about
                    you.
                  </p>
                </div>
              </div>
              <div className="margin-bottom-90">
                <Thumbnail
                  backgroundImage="/images/whoisthinking.png"
                  link="https://www.etsy.com/listing/1349644761/who-is-thinking-about-you-and-why?click_key=f948f9dc2e361c573dd7cc89e772d3d768480147%3A1349644761&click_sum=706ce7a8&ref=shop_home_active_7&crt=1&sts=1"
                />
                <div className="description-box">
                  <p className="title">Who is thinking about you?</p>
                  <hr className="hr-3"></hr>
                  <p className="description">
                    Find out who is thinking about you and why you're on their
                    mind.
                  </p>
                </div>
              </div>
              <div className="margin-bottom-90">
                <Thumbnail
                  backgroundImage="/images/whoiscoming.png"
                  link="https://www.etsy.com/listing/1515969810/who-is-coming-towards-you-in-love?click_key=677ae3a5954d24d4a276877a15aab054ca2b8d7f%3A1515969810&click_sum=75c2e8df&ref=shop_home_active_1&crt=1&sts=1"
                />

                <div className="description-box">
                  <p className="title">Who is coming towards you?</p>
                  <hr className="hr-3"></hr>
                  <p className="description">
                    Figure out who is coming towards you next in love.
                  </p>
                </div>
              </div>
              <div className="margin-bottom-90">
                <Thumbnail
                  backgroundImage="/images/willtheycome.png"
                  link="https://www.etsy.com/listing/1459349533/will-they-come-back-psychic-tarot?click_key=72d643963048edd04645f2e71a67995d19dbe2bc%3A1459349533&click_sum=d4e7ef64&ref=shop_home_active_10&sts=1"
                />

                <div className="description-box">
                  <p className="title">Will they come back?</p>
                  <hr className="hr-3"></hr>
                  <p className="description">
                    Find out whether the person on your mind will come back into
                    your life.
                  </p>
                </div>
              </div>
              <div className="margin-bottom-90">
                <Thumbnail
                  backgroundImage="/images/whoissoulmate.png"
                  link="https://www.etsy.com/listing/1603768530/who-is-your-soulmate-psychic-love?click_key=f6bfb691e10b080f94d48cf527d926c3f0eea38e%3A1603768530&click_sum=080e2223&ref=shop_home_active_5&sts=1"
                />

                <div className="description-box">
                  <p className="title">Who is your soulmate?</p>
                  <hr className="hr-3"></hr>
                  <p className="description">
                    Get a description of your soulmate's personality and Zodiac
                    sign.
                  </p>
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

export default TarotReadings;
