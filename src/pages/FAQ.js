import React from "react";
import "./FAQ.css";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <hr className="title-hr"></hr>
        <p className="Q">how will i receive my reading?</p>
        <p className="A">
          Readings will be sent through Etsy messages. Email also works if
          requested.
        </p>
        <p className="Q">what is the delivery time?</p>
        <p className="A">
          Same day readings will be complete within 24 hours. I aim to complete
          all other readings within 3 days, but some may take longer depending
          on my schedule.
        </p>
        <p className="Q">what if i'm not satisfied with my reading?</p>
        <p className="A">
          My first priority is to guarantee each customer's satisfaction. In the
          rare case that your reading doesn't resonate or takes unreasonably
          long (5+ days for normal readings or over 24 hours for same day
          readings), I will gladly offer you a full refund on your order.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
