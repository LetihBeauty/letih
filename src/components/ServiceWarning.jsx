// src/components/ServiceWarning.jsx

import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import "./ServiceWarning.css"; // Importa o CSS para o estilo Markdown

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

const ServiceWarning = ({ alertMessage }) => {
  if (!alertMessage || !alertMessage.nodeType) {
    return <p>No warnings available.</p>;
  }
  let htmlContent = documentToHtmlString(alertMessage);

  htmlContent = htmlContent.replace(/\* (.+?)(\n|$)/g, "<li>$1</li>");
  htmlContent = htmlContent.replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>");

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
