import "./Booking.css";
import Btn from "../components/Btn";
import { fetchPageData } from "../services/contentfulService.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Step1SelectService from "../components/booking/Step1SelectService";

// Booking Component
const Booking = () => {
  const [data, setData] = useState(null); // Stores data from Contentful
  const [step, setStep] = useState(1); // Tracks current step in booking process
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [bookingId, setBookingId] = useState(""); // Stores confirmed booking ID

  // Fetch Contentful data
  const getData = async () => {
    try {
      const result = await fetchPageData("booking");
      setData(result.data);
    } catch (error) {
      console.error(
        "Error fetching Contentful data:",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Extract data for the current booking
  const bookData = data?.bookingCollection?.items?.[0];
  console.log("bookData", bookData);

  if (!data) {
    return <p>Loading...</p>;
  }

  // Handle update to booking data
  const updateBookingData = (field, value) => {
    setBookingData({ ...bookingData, [field]: value });
  };

  // Handle booking submission
  const submitBooking = async () => {
    try {
      const response = await axios.post(
        "https://connect.squareup.com/v2/bookings",
        {
          booking: {
            locationId: "YOUR_LOCATION_ID",
            startAt: `${bookingData.date}T${bookingData.time}:00Z`,
            customerId: "CUSTOMER_ID",
            appointmentSegments: [
              {
                durationMinutes: 60,
                serviceVariationId: "YOUR_SERVICE_ID",
                teamMemberId: "TEAM_MEMBER_ID",
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            "Content-Type": "application/json",
          },
        }
      );
      setBookingId(response.data.booking.id);
      setStep(4); // Move to confirmation step
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("There was an issue creating your booking. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-steps">
        <h1>{bookData?.title || "Booking Page"}</h1>
        {step === 1 && (
          <Step1SelectService
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            nextStep={() => setStep(2)}
            bookData={bookData}
          />
        )}
        {step === 2 && (
          <Step2SelectTime
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            nextStep={() => setStep(3)}
            prevStep={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3Details
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            submitBooking={submitBooking}
            prevStep={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <Step4Confirmation bookingData={bookingData} bookingId={bookingId} />
        )}
      </div>
      <img src={bookData.image.url} alt={bookData.image.description} />
    </div>
  );
};

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

export default Booking;
