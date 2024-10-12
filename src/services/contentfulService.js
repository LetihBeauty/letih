import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master`, // Ajuste conforme a URL correta
  {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);

// Função genérica para buscar dados de qualquer página
export const fetchPageData = async (page) => {
  console.log("importando os dados");
  let query = "";

  switch (page) {
    case "home":
      query = gql`
        {
          homepageCollection {
            items {
              slug
              aboutUsImageOne {
                url
                title
              }
              aboutUsImageTwo {
                url
                title
              }
              aboutUsParagraphOne {
                json
              }
              aboutUsParagraphTwo {
                json
              }
              aboutUsTitleOne
              aboutUsTitleTwo
              heroImage {
                url
                title
              }
              subtitle
              title
              urlAboutUs
              urlHero
              ourServicesCollection {
                items {
                  ... on HomePageSections {
                    title
                    urlLearnMore
                    paragraphy {
                      json
                    }
                    image {
                      url
                      title
                      fileName
                    }
                  }
                }
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
    const data = await client.request(query); // Aqui a query é enviada
    return data;
  } catch (error) {
    console.error(`Error fetching ${page} data:`, error);
    throw error;
  }
};
