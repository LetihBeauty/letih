// import React from "react";
// import "../../pages/Booking.css";
// import Btn from "../Btn";

// // Step 2: Select Time
// const Step2SelectTime = ({
//   bookingData,
//   updateBookingData,
//   nextStep,
//   prevStep,
// }) => (
//   <div>
//     <p>Select a date and time:</p>
//     <input
//       type="date"
//       value={bookingData.date}
//       onChange={(e) => updateBookingData("date", e.target.value)}
//     />
//     <select
//       value={bookingData.time}
//       onChange={(e) => updateBookingData("time", e.target.value)}
//     >
//       <option value="">Select time</option>
//       <option value="10:00">10:00 AM</option>
//       <option value="13:00">1:00 PM</option>
//       <option value="16:00">4:00 PM</option>
//     </select>
//     <button onClick={prevStep}>Back</button>
//     <button
//       onClick={nextStep}
//       disabled={!bookingData.date || !bookingData.time}
//     >
//       Next
//     </button>
//   </div>
// );

// export default Step2SelectTime;
import React, { useEffect, useState } from "react";
import "../../pages/Booking.css";
import Btn from "../Btn";
import { fetchRecords } from "../../services/airtableService"; // Supondo que você tenha configurado o AirtableService.js

// Step 2: Select Time
const Step2SelectTime = ({
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) => {
  const [datesAndTimes, setDatesAndTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Fetch data from Airtable
  useEffect(() => {
    const getData = async () => {
      try {
        const records = await fetchRecords("AvailableSlots"); // Substitua "AvailableSlots" pelo nome da tabela no Airtable
        setDatesAndTimes(
          records.map((record) => ({
            date: record.fields.date, // Certifique-se de que o nome do campo no Airtable é "date"
            time: record.fields.time, // Certifique-se de que o nome do campo no Airtable é "time"
          }))
        );
      } catch (error) {
        console.error("Error fetching available slots:", error);
      }
    };
    getData();
  }, []);

  // Filter available times based on selected date
  useEffect(() => {
    if (bookingData.date) {
      const times = datesAndTimes
        .filter((slot) => slot.date === bookingData.date)
        .map((slot) => slot.time);
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
  }, [bookingData.date, datesAndTimes]);

  return (
    <div>
      <p>Select a date and time:</p>
      {/* Date Selector */}
      <input
        type="date"
        value={bookingData.date}
        onChange={(e) => updateBookingData("date", e.target.value)}
      />
      {/* Time Selector */}
      <select
        value={bookingData.time}
        onChange={(e) => updateBookingData("time", e.target.value)}
        disabled={!availableTimes.length}
      >
        <option value="">Select time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <button onClick={prevStep}>Back</button>
      <button
        onClick={nextStep}
        disabled={!bookingData.date || !bookingData.time}
      >
        Next
      </button>
    </div>
  );
};

export default Step2SelectTime;
