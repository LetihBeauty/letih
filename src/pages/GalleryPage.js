import React, { useEffect, useState } from "react";
import { fetchPageData } from "../services/contentfulService.js"; // Importa o serviço

import "./GalleryPage.css";

const GalleryPage = () => {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch gallery data
  const getData = async () => {
    try {
      const result = await fetchPageData("galleryPage"); // Replace fetchPageData with your actual data-fetching function
      setData(result.data);
    } catch (error) {
      console.error(`Error fetching data:`, error.response || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Extract images from data
  const images = data?.galleryPageCollection?.items[0]?.imagesCollection?.items;
  const title = data?.galleryPageCollection?.items[0]?.title;

  if (!images || images.length === 0) {
    return <p>Loading...</p>;
  }

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">{title}</h1>
      </div>
      <div className="carousel">
        <button className="carousel-control prev" onClick={prevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="carousel-image">
          <img
            src={images[currentIndex]?.url} // Corrected to access `url`
            alt={images[currentIndex]?.title || "Image"} // Fallback to "Image" if no title is available
          />
        </div>
        <button className="carousel-control next" onClick={nextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
