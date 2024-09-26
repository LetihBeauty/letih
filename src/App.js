import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SingIn from "./pages/SingIn.js";
import Layout from "./components/Layout";
import DeepCleasing from "./pages/service/FacialDeepCleasing.js";
import Dermaplaning from "./pages/service/FacialDermaPlaning.js";
import Glowfacial from "./pages/service/FacialGlowFacial.js";
import Ultraformer from "./pages/service/Ultraformer.js";
import Microneedling from "./pages/service/Microneedling.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/facial/DeepCleasing" element={<DeepCleasing />} />
          <Route path="/service/facial/Dermaplaning" element={<Dermaplaning />} />
          <Route path="/service/facial/Glowfacial" element={<Glowfacial />} />
          <Route path="/service/Ultraformer" element={<Ultraformer />} />
          <Route path="/service/Microneedling" element={<Microneedling />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/singIn" element={<SingIn />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
