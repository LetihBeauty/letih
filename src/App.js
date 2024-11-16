import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Review from "./pages/Review";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
import MyAccount from "./pages/MyAccount.js";
import Layout from "./components/Layout";
import FacialService from "./pages/service/FacialService.jsx";
import ServicePage from "./pages/service/ServicePage.jsx";

function App() {
  // const data = fetchPageData("home");

  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/facial/:slug" element={<FacialService />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          {/* <Route path="/service/Ultraformer" element={<Ultraformer />} /> */}
          {/* <Route path="/service/Microneedling" element={<Microneedling />} />
          <Route
            path="/service/SkinCareRoutine"
            element={<SkinCareRoutine />}
          />
          <Route path="/service/RoseDeMer" element={<RoseDeMer />} />
          <Route path="/service/BodyDetox" element={<BodyDetox />} />
          <Route path="/service/BellyReducing" element={<BellyReducing />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          */}
          <Route path="/singIn" element={<MyAccount />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
