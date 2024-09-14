import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

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

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries()
      .then((response) => {
        setData(response.items);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
  console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>

      <div>
        {data ? (
          data.map((entry) => (
            <div key={entry.sys.id}>{entry.fields.title}</div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Router>
  );
}

export default App;
