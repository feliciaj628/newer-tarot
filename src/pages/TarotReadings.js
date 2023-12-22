import React from "react";
import "./TarotReadings.css";
import Thumbnail from "../components/Thumbnail";
import "../components/Thumbnail.css";
import "../App.css";
import Footer from "../components/Footer";

function TarotReadings() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <div className="container">
            {/* <h1 className="page-title effect white">Get a Reading</h1> */}
            {/* <hr className="title-hr hr-2"></hr> */}
            <div className="stars">
              <div className="twinkling box">
                <p className="sameday-title">Same Day Readings</p>
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
                        This reading will provide insight into the person on
                        your mind and how they truly feel about you.
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
                        someone you are no longer in contact with and whether or
                        not this person still thinks about you.
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
                        This reading will describe who is currently thinking
                        about you and why you're on this person's mind.
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
                        Get an answer to one question of your choice - see
                        listing description for more details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="box-outline"> */}
            <h2 id="h2-2" className="other-title white">
              Other Readings
            </h2>
            <p className="delivery-time2">(2-4 day delivery)</p>

            <div className="thumbnail-container2">
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TarotReadings;
