import React from "react";
import "./Contact.css";
import "../App.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <div className="items-center" id="contact-page">
            {/* <h1 className="page-title">Contact</h1>
        <hr className="title-hr"></hr> */}

            <div className="contact-container">
              <div className="cloud-container">
                <img
                  id="cloud"
                  src="./images/cloud.png"
                  class="shadowed-image"
                  alt="cloud"
                />

                <div className="contact-list">
                  <p className="ul-title">Where to find me:</p>
                  <div className="contact-container2">
                    <a
                      className="contact-link li-title"
                      id="email-icon"
                      href="crystalsmagickcorner@gmail.com"
                    ></a>
                    <a
                      className="contact-link li-title"
                      id="youtube-icon"
                      href="https://www.youtube.com/@crystalsmagickcorner"
                    ></a>
                    <a
                      className="contact-link li-title"
                      href="https://www.etsy.com/shop/CrystaIsMagickCorner?ref=seller-platform-mcnav"
                      id="etsy-icon"
                    ></a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
