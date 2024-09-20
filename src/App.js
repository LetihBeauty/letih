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
import DeepCleasing from "./pages/service/DeepCleasing.js";
import Dermaplaning from "./pages/service/DermaPlaning.js";
import Glowfacial from "./pages/service/GlowFacial.js";
import Ultraformer from "./pages/service/Ultraformer.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/DeepCleasing" element={<DeepCleasing />} />
          <Route path="/service/Dermaplaning" element={<Dermaplaning />} />
          <Route path="/service/Glowfacial" element={<Glowfacial />} />
          <Route path="/service/Ultraformer" element={<Ultraformer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
