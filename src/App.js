import React, { useEffect, useState } from "react";
import { fetchPageData } from "./services/contentfulService"; // Importa o serviço

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout";

function App() {
  const [data, setData] = useState(null);

  console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
  console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/service" element={<Service data={data} />} />
          <Route path="/review" element={<Review data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
          <Route path="/gallery" element={<Gallery data={data} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
