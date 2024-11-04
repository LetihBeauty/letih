// src/components/ServiceWarning.jsx

import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import "./ServiceWarning.css"; // Importa o CSS para o estilo Markdown

const ServiceWarning = ({ alertMessage }) => {
  if (!alertMessage || !alertMessage.nodeType) {
    return <p>No warnings available.</p>;
  }
  let htmlContent = documentToHtmlString(alertMessage);

  // htmlContent = htmlContent.replace(/\* (.+?)(\n|$)/g, "<li>$1</li>");
  // htmlContent = htmlContent.replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>");

  return (
    <div className="globalWarningWrap">
      <div className="globalServiceIncludedWarning">
        <span className="material-symbols-outlined">info</span>
        <div
          className="markdown-style"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
};

export default ServiceWarning;
