import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import TarotReadings from "./pages/TarotReadings";
import OracleDecks from "./pages/OracleDecks";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <Router>
        <div className="width">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/blog" exact element={<Blog />} />
            <Route path="/tarotreadings" exact element={<TarotReadings />} />
            <Route path="/oracledecks" exact element={<OracleDecks />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/FAQ" exact element={<FAQ />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
