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
import Booking from "./pages/Booking.js";
import ProductsPage from "./pages/ProductsPage";

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
          <Route path="/booking" element={<Booking />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/products/:clientLogin" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
