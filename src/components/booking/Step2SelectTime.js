import React, { useState, useEffect } from "react";
import "../../pages/Booking.css";
import Btn from "../Btn";
import { fetchAvailableSlots } from "../../services/airtableService"; // Função para buscar dados do Airtable

const Step2SelectTime = ({
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) => {
  const [datesAndTimes, setDatesAndTimes] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Fetch data from Airtable quando o componente monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        const slots = await fetchAvailableSlots(); // Busca os horários disponíveis
        setDatesAndTimes(slots);
      } catch (error) {
        console.error("Error fetching available slots:", error);
      }
    };

    fetchData();
  }, []);

  // Atualiza os horários disponíveis com base na data selecionada
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

  // Função para renderizar o calendário
  const generateCalendar = () => {
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const daysInMonth = Array.from(
      { length: lastDay.getDate() },
      (_, i) =>
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
    );

    return daysInMonth.map((day) => {
      const isAvailable = datesAndTimes.some(
        (slot) => slot.date === day.toISOString().split("T")[0]
      );
      return (
        <div
          key={day.toISOString()}
          className={`calendar-day ${
            selectedDate === day.toISOString().split("T")[0] ? "selected" : ""
          } ${isAvailable ? "available" : ""}`}
          onClick={() => handleDateClick(day)}
        >
          {day.getDate()}
        </div>
      );
    });
  };

  const handleDateClick = (day) => {
    const selected = day.toISOString().split("T")[0];
    setSelectedDate(selected);
    updateBookingData("date", selected);
  };

  const handleTimeClick = (time) => {
    updateBookingData("time", time);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <span>
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </span>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-days">{generateCalendar()}</div>
      </div>

      {/* Horários disponíveis */}
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
            <div
              key={index}
              className={`time-slot ${
                bookingData.time === time ? "selected" : ""
              }`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </div>
          ))
        ) : (
          <p>No available times</p>
        )}
      </div>

      {/* Botões */}
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
