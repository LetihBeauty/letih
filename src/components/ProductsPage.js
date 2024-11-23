import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchClientAndProducts } from "../services/airtableService";
import { fetchPageData } from "../services/contentfulService.js";

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
        console.log("Result from fetchPageData:", result);
        setPageData(result);
      } catch (error) {
        console.error(`Error fetching data:`, error.response || error.message);
      }
    };

    fetchData();
    getData();
  }, [clientLogin]);

  // console.log("pageData:", pageData);

  if (!client || !client.name) {
    return <p>Loading...</p>;
  }

  return (
    <div className="products-page">
      <h1>Welcome, {client.name}!</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.productName}</strong> - {product.howToUse}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for this client.</p>
      )}
    </div>
  );
};

export default ProductsPage;
