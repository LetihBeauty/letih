import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../shared/common.css";
import ServiceWarning from "../../components/ServiceWarning.jsx";
import Banner from "../../components/Banner.js";
import { fetchPageData } from "../../services/contentfulService.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ServicePage = () => {
  const { slug } = useParams(); // Pegando o slug da URL
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const result = await fetchPageData("servicePage");

      // Captura o slug da URL
      const slugFromUrl = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();
      console.log("Slug atual da URL:", slugFromUrl);

      // Filtra o item de acordo com o slug em minúsculas (ou ajuste conforme necessário)
      const deepCleansingData =
        result?.data?.servicePageCollection?.items?.find(
          (item) => item.slug.toLowerCase() === slugFromUrl
        );

      if (deepCleansingData) {
        setData(deepCleansingData);
      } else {
        console.error(`Item '${slugFromUrl}' não encontrado`);
      }
    } catch (error) {
      console.error(
        "Erro ao buscar os dados:",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, [slug]); // Atualiza quando o slug mudar

  if (!data) {
    return <p>Loading...</p>;
  }

  const warning = data.warning.json;
  console.log("warning", warning);

  return (
    <div>
      <ServiceWarning alertMessage={warning} />
    </div>
  );
};
export default ServicePage;
