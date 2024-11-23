import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchClientAndProducts } from "../services/airtableService";

const ProductsPage = () => {
  const { clientLogin } = useParams();
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [client, setClient] = useState([]);

  console.log("useParams:", useParams());

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Busca os dados do cliente e produtos pelo clientLogin
        const data = await fetchClientAndProducts(clientLogin);

        console.log("Data:", data);
        console.log("Client:", data.client);
        console.log("Products:", data.products);

        // Atualiza os estados
        setProducts(data.products);
        setClient(data.client);
      } catch (error) {
        console.error("Error fetching client products:", error);
        setErrorMessage("Failed to fetch client products.");
      }
    };

    fetchData();
  }, [clientLogin]);

  console.log("Client:", client);
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
