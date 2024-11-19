import Airtable from "airtable";

console.log("API Key:", process.env.REACT_APP_AIRTABLE_API_KEY);
console.log("Base ID:", process.env.REACT_APP_AIRTABLE_BASE_ID);
console.log("Table Name:", process.env.REACT_APP_AIRTABLE_TABLE_AVAILABLESLOTS);

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});
var base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID);

// Nome da tabela
const REACT_APP_AIRTABLE_TABLE_AVAILABLESLOTS =
  process.env.REACT_APP_AIRTABLE_TABLE_AVAILABLESLOTS;

const REACT_APP_AIRTABLE_TABLE_BOOKED =
  process.env.REACT_APP_AIRTABLE_TABLE_BOOKED;

// Função para adicionar um registro ao Airtable
export const addRecordToAirtable = async (record) => {
  try {
    const createdRecord = await base(REACT_APP_AIRTABLE_TABLE_BOOKED).create([
      {
        fields: record, // Dados a serem enviados ao Airtable
      },
    ]);

    console.log("Record added:", createdRecord);
    return createdRecord;
  } catch (error) {
    console.error("Error adding record to Airtable:", error);
    throw error;
  }
};

// Função para buscar horários disponíveis
export const fetchAvailableSlots = async () => {
  try {
    const records = await base(REACT_APP_AIRTABLE_TABLE_AVAILABLESLOTS)
      .select({
        filterByFormula: `{Status} = 'Available'`, // Filtro para horários disponíveis
      })
      .all();

    return records.map((record) => ({
      id: record.id,
      date: record.fields.Date,
      time: record.fields.Time,
      status: record.fields.Status,
    }));
  } catch (error) {
    console.error("Error fetching available slots:", error);
    throw error;
  }
};
