import React from "react";
import "./Blog.css";
import "../App.css";
import Footer from "../components/Footer";

function Blog() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <hr className="title-hr"></hr>
        <div className="box"></div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
