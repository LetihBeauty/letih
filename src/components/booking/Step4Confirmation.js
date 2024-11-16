import React from "react";
import "../../pages/Booking.css";
import Btn from "../Btn";

// Step 4: Confirmation
const Step4Confirmation = ({ bookingData, bookingId }) => (
  <div>
    <h2>Booking confirmed!</h2>
    <p>Thank you for booking with us. Here are your details:</p>
    <ul>
      <li>
        <strong>Booking ID:</strong> {bookingId}
      </li>
      <li>
        <strong>Service:</strong> {bookingData.service}
      </li>
      <li>
        <strong>Date:</strong> {bookingData.date}
      </li>
      <li>
        <strong>Time:</strong> {bookingData.time}
      </li>
      <li>
        <strong>Name:</strong> {bookingData.name}
      </li>
    </ul>
    <button onClick={() => (window.location.href = "/")}>Back to Home</button>
  </div>
);

export default Step4Confirmation;
