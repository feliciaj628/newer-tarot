import React from "react";
import "../App.css";
import Banner from "../components/Banner";
import NewItems from "../components/NewItems";
import Footer from "../components/Footer";
import CloudEdge from "../components/CloudEdge";
import Testimonial from "../components/Testimonial";
import data from "../data.json";
import "./Home.css";

function Home() {
  return (
    <>
      <Banner />
      <CloudEdge />
      <div className="container items-center">
        <div className="heading-container">
          <h1 className="data-heading">
            join <strong>over a thousand </strong>others who have unveiled their
            person's <u>true feelings and intentions</u>
          </h1>
        </div>
        <div className="data-container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="sales-container">
            {/* <div className="data-heading">
              Get answers to your burning questions from an experienced tarot
              reader
            </div> */}

            <h1 className="page-title-2">A Reader You Can Trust</h1>
            <ul className="data">
              <li className="data-li">
                Over
                <strong> 1,400</strong> readings given
              </li>
              <li className="data-li">
                <strong>4.9</strong> star average rating
              </li>
              <li className="data-li">
                <strong>300+</strong> testimonials
              </li>
            </ul>
          </div>
          <img
            className="card-image mx-auto rounded-md"
            src="/images/home-photo3.jpg"
          ></img>
        </div>
        <div className="testimonial-container">
          <Testimonial testimonialData={data} />
        </div>
        <div className="thumbnail-container-container">
          <NewItems />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
