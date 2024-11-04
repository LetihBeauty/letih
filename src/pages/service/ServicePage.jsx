import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import "../../shared/common.css";
import "./ServicePage.css";
import ServiceWarning from "../../components/ServiceWarning.jsx";
import Banner from "../../components/Banner.js";
import BtnGreen from "../../components/BtnGreen";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { fetchPageData } from "../../services/contentfulService.js";

const options = {
  renderMark: {
    bold: (text) => <strong>{text}</strong>,
    italic: (text) => <em>{text}</em>,
    underline: (text) => <u>{text}</u>,
  },
  renderNode: {
    paragraph: (node, children) => <p>{children}</p>,
    "heading-1": (node, children) => <h1>{children}</h1>,
    "heading-2": (node, children) => <h2>{children}</h2>,
    "heading-3": (node, children) => <h3>{children}</h3>,
    "unordered-list": (node, children) => <ul>{children}</ul>,
    "ordered-list": (node, children) => <ol>{children}</ol>,
    "list-item": (node, children) => <li>{children}</li>,
    blockquote: (node, children) => <blockquote>{children}</blockquote>,
  },
};

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
  const bannerTitle = data.title;
  const aboveFoldContent = documentToHtmlString(data.aboveFoldContent.json);
  // let htmlContent = documentToHtmlString(aboveFoldContent);
  console.log("aboveFoldContent", aboveFoldContent);

  return (
    <div>
      <Banner bannerTitle={bannerTitle} />
      <div className="aboveFoldContainer">
        <div className="aboveFoldContentLeft">
          <div
            className="aboveFoldContent"
            dangerouslySetInnerHTML={{ __html: aboveFoldContent }}
          />
          <BtnGreen>Book Now</BtnGreen>
        </div>
        <div className="aboveFoldImage">
          <img
            src={data.aboveFoldImage.url}
            alt={data.aboveFoldImage.description}
            title={data.aboveFoldImage.title}
          />
        </div>
      </div>
      <div className="green-fold"></div>
      <ServiceWarning alertMessage={warning} />
    </div>
  );
};
export default ServicePage;
