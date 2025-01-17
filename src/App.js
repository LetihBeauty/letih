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
import DeepCleasing from "./pages/service/FacialDeepCleasing.jsx";
import Dermaplaning from "./pages/service/FacialDermaPlaning.jsx";
import Glowfacial from "./pages/service/FacialGlowFacial.jsx";
import Ultraformer from "./pages/service/Ultraformer.jsx";
import Microneedling from "./pages/service/Microneedling.jsx";
import SkinCareRoutine from "./pages/service/SkinCareRoutine.jsx";
import RoseDeMer from "./pages/service/RoseDeMer.jsx";
import BodyDetox from "./pages/service/BodyDetox.jsx";
import BellyReducing from "./pages/service/BellyReducing.jsx";

function App() {
  // console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
  // console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

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
          <Route path="/service/SkinCareRoutine" element={<SkinCareRoutine />} />
          <Route path="/service/RoseDeMer" element={<RoseDeMer />} />
          <Route path="/service/BodyDetox" element={<BodyDetox />} />
          <Route path="/service/BellyReducing" element={<BellyReducing />} />
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
