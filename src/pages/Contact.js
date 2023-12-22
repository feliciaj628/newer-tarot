import React from "react";
import "./Contact.css";
import "../App.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">Contact</h1>
        <hr className="title-hr"></hr>
        <div className="contact-container">
          <ul className="contact-list">
            <p className="ul-title">where to find me</p>
            <li className="contact-li">
              <span className="li-title">
                email:
                <br />
              </span>
              crystalsmagickcorner@gmail.com
            </li>
            <li className="contact-li">
              <span className="li-title">youtube: </span>
              <a href="https://www.youtube.com/@crystalsmagickcorner">
                https://www.youtube.com/@crystalsmagickcorner
              </a>
            </li>
            <li className="contact-li">
              <span className="li-title">etsy: </span>
              <a href="https://www.etsy.com/shop/CrystaIsMagickCorner?ref=seller-platform-mcnav">
                https://www.etsy.com/shop/CrystaIsMagickCorner?ref=seller-platform-mcnav
              </a>
            </li>
          </ul>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
