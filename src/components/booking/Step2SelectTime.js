import React from "react";
import "../../pages/Booking.css";
import Btn from "../Btn";

// Step 2: Select Time
const Step2SelectTime = ({
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) => (
  <div>
    <p>Select a date and time:</p>
    <input
      type="date"
      value={bookingData.date}
      onChange={(e) => updateBookingData("date", e.target.value)}
    />
    <select
      value={bookingData.time}
      onChange={(e) => updateBookingData("time", e.target.value)}
    >
      <option value="">Select time</option>
      <option value="10:00">10:00 AM</option>
      <option value="13:00">1:00 PM</option>
      <option value="16:00">4:00 PM</option>
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

export default Step2SelectTime;
