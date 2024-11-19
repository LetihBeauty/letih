// import React, { useState, useEffect } from "react";
// import "../../pages/Booking.css";
// import Btn from "../Btn";
// import Calendar from "react-calendar"; // Importa o componente React-Calendar
// import { fetchAvailableSlots } from "../../services/airtableService"; // Função para buscar dados do Airtable
// import "react-calendar/dist/Calendar.css"; // Estilos padrão do React-Calendar

// const Step2SelectTime = ({
//   bookingData,
//   updateBookingData,
//   nextStep,
//   prevStep,
// }) => {
//   const [datesAndTimes, setDatesAndTimes] = useState([]);
//   const [availableTimes, setAvailableTimes] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Fetch data from Airtable ao montar o componente
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const slots = await fetchAvailableSlots(); // Busca os horários disponíveis
//         setDatesAndTimes(slots);
//       } catch (error) {
//         console.error("Error fetching available slots:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Atualiza os horários disponíveis com base na data selecionada
//   useEffect(() => {
//     if (selectedDate) {
//       const timesForDate = datesAndTimes
//         .filter(
//           (slot) => slot.date === selectedDate && slot.status === "Available"
//         )
//         .map((slot) => slot.time);
//       setAvailableTimes(timesForDate);
//     } else {
//       setAvailableTimes([]);
//     }
//   }, [selectedDate, datesAndTimes]);

//   // Manipula a seleção de uma data no calendário
//   const handleDateChange = (date) => {
//     const formattedDate = date.toISOString().split("T")[0]; // Formato YYYY-MM-DD
//     setSelectedDate(formattedDate);
//     updateBookingData("date", formattedDate);
//   };

//   // Manipula a seleção de um horário
//   const handleTimeClick = (time) => {
//     updateBookingData("time", time);
//   };

//   return (
//     <div className="calendar-container">
//       {/* Componente React-Calendar */}
//       <div className="calendar">
//         <Calendar
//           onChange={handleDateChange}
//           value={selectedDate ? new Date(selectedDate) : null}
//           tileClassName={({ date }) => {
//             const formattedDate = date.toISOString().split("T")[0];
//             return datesAndTimes.some((slot) => slot.date === formattedDate)
//               ? "available"
//               : null;
//           }}
//           minDate={new Date()} // Evita datas passadas
//         />
//       </div>

//       {/* Horários disponíveis */}
//       <div className="time-slots">
//         <p id="title">
//           {selectedDate
//             ? `${new Date(selectedDate).toLocaleDateString("en-US", {
//                 weekday: "long",
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//               })}`
//             : "Please select a date"}
//         </p>
//         {availableTimes.length > 0 ? (
//           availableTimes.map((time, index) => (
//             <div
//               key={index}
//               className={`time-slot ${
//                 bookingData.time === time ? "selected" : ""
//               }`}
//               onClick={() => handleTimeClick(time)}
//             >
//               {time}
//             </div>
//           ))
//         ) : (
//           <p>No available times</p>
//         )}
//       </div>

//       {/* Botões */}
//       <div className="button-container">
//         <Btn
//           customButtonClass="white white-step-2-select-time"
//           onClick={prevStep}
//         >
//           Back
//         </Btn>
//         <Btn
//           customButtonClass="green green-step-2-select-time"
//           onClick={nextStep}
//           disabled={!bookingData.date || !bookingData.time}
//         >
//           Next
//         </Btn>
//       </div>
//     </div>
//   );
// };

// export default Step2SelectTime;
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../../pages/Booking.css";
import Btn from "../Btn";
import {
  fetchAvailableSlots,
  saveBooking,
} from "../../services/airtableService";
import "react-calendar/dist/Calendar.css";

const Step2SelectTime = ({
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) => {
  const [datesAndTimes, setDatesAndTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch slots from Airtable
  useEffect(() => {
    const fetchData = async () => {
      try {
        const slots = await fetchAvailableSlots();
        setDatesAndTimes(slots);
      } catch (error) {
        console.error("Error fetching available slots:", error);
      }
    };
    fetchData();
  }, []);

  // Update available times when a date is selected
  useEffect(() => {
    if (selectedDate) {
      const timesForDate = datesAndTimes
        .filter(
          (slot) => slot.date === selectedDate && slot.status === "Available"
        )
        .map((slot) => slot.time);
      setAvailableTimes(timesForDate);
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate, datesAndTimes]);

  // Handle date selection
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    updateBookingData("date", formattedDate);
  };

  // Handle time selection
  const handleTimeClick = (time) => {
    updateBookingData("time", time);
  };

  const handleSave = async () => {
    try {
      const bookingDataToSave = {
        Date: bookingData.date,
        Time: bookingData.time,
        Service: bookingData.service,
        Status: "Booked", // Define o status como reservado
      };

      await saveBooking(bookingDataToSave); // Função para salvar na tabela Booked
      alert("Booking successfully saved!");
      nextStep();
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <div className="calendar-container">
        {/* React Calendar */}
        <div className="calendar">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate ? new Date(selectedDate) : null}
            tileClassName={({ date }) => {
              const formattedDate = date.toISOString().split("T")[0];
              return datesAndTimes.some((slot) => slot.date === formattedDate)
                ? "calendar-day available"
                : null;
            }}
            minDate={new Date()} // Prevent past dates
          />
        </div>

        {/* Available Times */}
        <div className="time-slots">
          <p id="title">
            {selectedDate
              ? `${new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`
              : "Please select a date"}
          </p>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <button
                key={index}
                className={`time-slot ${
                  bookingData.time === time ? "selected" : ""
                }`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))
          ) : (
            <p>No available times</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <Btn
          customButtonClass="white white-step-2-select-time"
          onClick={prevStep}
        >
          Back
        </Btn>
        <Btn
          customButtonClass="green green-step-2-select-time"
          onClick={nextStep}
          disabled={!bookingData.date || !bookingData.time}
        >
          Next
        </Btn>
      </div>
    </div>
  );
};

export default Step2SelectTime;
