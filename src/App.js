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

  useEffect(() => {
    const path = window.location.pathname;
    const page = path === "/" ? "home" : path.replace("/", "");

    const getData = async () => {
      try {
        const response = await fetchPageData(page);

        // Dependendo da página, acessar a coleção correta
        let pageData;
        switch (page) {
          case "home":
            pageData = response.homepageCollection?.items;
            break;
          case "about":
            pageData = response.aboutPageCollection?.items;
            break;
          // Adicione mais casos para outras páginas
          case "services":
            pageData = response.servicePageCollection?.items;
            break;
          default:
            console.error(`No data found for page: ${page}`);
        }

        console.log(`Entries fetched for ${page}:`, pageData);
        setData(pageData);
      } catch (error) {
        console.error(
          `Error fetching ${page} data:`,
          error.response || error.message
        );
      }
    };

    getData();
  }, [window.location.pathname]);

  console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
  console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/service" element={<Service data={data} />} />
          <Route path="/review" element={<Review data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
          <Route path="/gallery" element={<Gallery data={data} />} />
        </Routes>
      </Layout>

      {/* Exemplo de como fazer para cada página */}
      {/* <div>
        {data ? (
          data.map((entry) => {
            console.log(entry.fields); // Exibir os campos no console
            return <div key={entry.sys.id}>{entry.fields.title}</div>; // Renderizar o campo "title"
          })
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </Router>
  );
}

export default App;
