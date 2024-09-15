require("dotenv").config();

console.log("🚀 Running showGraphqlLink.js");

// Pega o Space ID e Access Token do .env
const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

// Monta a URL do GraphQL
const graphqlUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}?access_token=${accessToken}`;

// Mensagens formatadas
console.log(
  "\x1b[36m%s\x1b[0m",
  "You can now query your GraphQL API at the following URL:"
); // Exibe mensagem em ciano
console.log("\x1b[34m%s\x1b[0m", graphqlUrl); // Exibe a URL em azul

console.log("\n📄 To query your data, use the GraphQL query interface.");
console.log(`🔗 GraphQL Query URL: \x1b[32m${graphqlUrl}\x1b[0m`); // Exibe o link em verde
