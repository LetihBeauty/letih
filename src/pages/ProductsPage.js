import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchClientAndProducts } from "../services/airtableService.js";
import { fetchPageData } from "../services/contentfulService.js";
import "./ProductsPage.css";
import RoutineTable from "../components/RoutineTable";

const ProductsPage = () => {
  const { clientLogin } = useParams();
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [client, setClient] = useState([]);
  const [pageData, setPageData] = useState(null);

  // console.log("useParams:", useParams());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchClientAndProducts(clientLogin);

        // console.log("Products:", data.products);

        setProducts(data.products);
        setClient(data.client);
      } catch (error) {
        console.error("Error fetching client products:", error);
        setErrorMessage("Failed to fetch client products.");
      }
    };

    const getData = async () => {
      try {
        const result = await fetchPageData("skinCareRoutine");
        // console.log("Result from fetchPageData:", result);

        if (
          result?.data?.skinCareRoutineCollection?.items &&
          result.data.skinCareRoutineCollection.items.length > 0
        ) {
          const pageDataContent = result.data.skinCareRoutineCollection.items;
          setPageData(result.data); // Armazena os dados brutos
        } else {
          console.warn("No items found in skinCareRoutineCollection");
        }
      } catch (error) {
        console.error(`Error fetching data:`, error.response || error.message);
      }
    };

    fetchData();
    getData();
  }, [clientLogin]);

  // console.log("products", products);

  const content = pageData?.skinCareRoutineCollection?.items?.[0];
  // console.log("content", content);

  if (!client || !client.name) {
    return <p>Loading...</p>;
  }

  return (
    <div className="products-page">
      <h1>Hello, {client.name || "Guest"}!</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div className="top-container">
        <div className="description">
          <p
            dangerouslySetInnerHTML={{
              __html:
                content?.description?.json?.content?.[0]?.content?.[0]?.value ||
                "No description available",
            }}
          ></p>

          <img src="/images/Leticia-Martins-sign.svg" alt="" />
        </div>
        <div className="image-link">
          {content?.image?.url && (
            <img src={content.image.url} alt="Content Image" />
          )}
          {content?.pdf?.url && (
            <a href={content.pdf.url} target="_blank" rel="noopener noreferrer">
              DOWNLOAD PDF
            </a>
          )}
        </div>
      </div>

      <div className="bottom-container">
        <h2>Skin Care Routine - Letih Beauty</h2>
        <RoutineTable routineData={products} />
      </div>

      {/* {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.productName}</strong> - {product.howToUse}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for this client.</p>
      )} */}
    </div>
  );
};

export default ProductsPage;
