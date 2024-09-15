import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);

// Função genérica para buscar dados de qualquer página
export const fetchPageData = async (page) => {
  let query = "";

  switch (page) {
    case "home":
      query = gql`
        {
          homepageCollection {
            items {
              title
              subtitle
              heroImage {
                url
              }
            }
          }
        }
      `;
      break;

    case "about":
      query = gql`
        {
          aboutPageCollection {
            items {
              title
              description
              image {
                url
              }
            }
          }
        }
      `;
      break;

    // Adicione mais casos para outras páginas

    default:
      throw new Error(`Page ${page} is not supported`);
  }

  try {
    const data = await client.request(query);
    return data;
  } catch (error) {
    console.error(`Error fetching ${page} data:`, error);
    throw error; // Lança o erro para que possa ser tratado em outros lugares, se necessário
  }
};
