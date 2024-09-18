import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/service/Service";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout";
import Dermaplaning from "/home/victor/code/victorfonsecass/letih/src/pages/service/Dermaplaning.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/dermaplaning" element={<Dermaplaning />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
