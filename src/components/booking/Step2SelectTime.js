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
// import addBookingToSquare from "../../services/squareupService";
// console.log(addBookingToSquare);

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
        {/* <div className="calendar">
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
        </div> */}
        <script src="https://square.site/appointments/buyer/widget/0wazyatxey61b7/L48D6RF065D1S.js"></script>

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
