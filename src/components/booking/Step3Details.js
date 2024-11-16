import "../../pages/Booking.css";
import Btn from "../Btn";
import React, { useState, useEffect } from "react";

// Step 3: Booking Details
const Step3Details = ({
  bookingData,
  updateBookingData,
  submitBooking,
  prevStep,
}) => (
  <div>
    <p>Please provide your details:</p>
    <input
      type="text"
      placeholder="Name"
      value={bookingData.name}
      onChange={(e) => updateBookingData("name", e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      value={bookingData.email}
      onChange={(e) => updateBookingData("email", e.target.value)}
    />
    <input
      type="text"
      placeholder="Phone"
      value={bookingData.phone}
      onChange={(e) => updateBookingData("phone", e.target.value)}
    />
    <textarea
      placeholder="Notes (optional)"
      value={bookingData.notes}
      onChange={(e) => updateBookingData("notes", e.target.value)}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={submitBooking}>Submit</button>
  </div>
);

export default Step3Details;
