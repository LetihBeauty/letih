import Airtable from "airtable";

// Configuração da API do Airtable
Airtable.configure({ apiKey: process.env.AIRTABLE_TOKEN_ID });
const base = Airtable.base(process.env.AIRTABLE_TOKEN_ID);

// Função para buscar registros de uma tabela
export const fetchRecords = async (tableName) => {
  try {
    const records = await base(tableName).select().firstPage(); // Busca a primeira página de registros
    return records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};
