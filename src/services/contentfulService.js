import axios from "axios";

console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
console.log("Access Token:", process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

if (
  !process.env.REACT_APP_CONTENTFUL_SPACE_ID ||
  !process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error(
    "As variáveis de ambiente SPACE_ID ou ACCESS_TOKEN não estão definidas."
  );
}

export const fetchPageData = async (page) => {
  console.log("importando os dados");
  let query = "";

  switch (page) {
    case "home":
      query = `
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
      ourServicesCollection (limit: 20) {
        items {
          __typename
          ... on HomePageSections {
            title
            slug
            paragraphy {
              json
            }
            image {
              url
              title
            }
          }
        }
      }
        testimonialsCollection (limit: 10) {
        items {
          __typename
          ... on Testimonials {
            customerName
            quote {
              json
            }
            customerImage {
              url
              title
            }
          }
        }
      }
    }
  }
}
      `;
      break;

    default:
      throw new Error(`Page ${page} is not supported`);
  }

  try {
    const response = await axios({
      url: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        query: query,
      },
    });

    console.log("Dados retornados:", response.data);
    return response.data; // Retorna os dados
  } catch (error) {
    if (error.response) {
      console.error("Erro ao buscar os dados:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("Nenhuma resposta recebida:", error.request);
    } else {
      console.error("Erro desconhecido:", error.message);
    }
  }
};
