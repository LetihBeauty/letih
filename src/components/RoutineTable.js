import React from "react";
import "./RoutineTable.css";

const RoutineTable = ({ routineData }) => {
  if (!routineData || routineData.length === 0) {
    return <p>Loading routines...</p>;
  }

  console.log("Routine Data:", routineData);

  // Function to get morning routine data
  const getMorningRoutineData = (routineData) => {
    return routineData.filter(
      (routine) => routine.morningRoutine && routine.morningRoutine.length > 0
    );
  };

  // Function to get night routine data
  const getNightRoutineData = (routineData) => {
    return routineData.filter(
      (routine) => routine.nightRoutine && routine.nightRoutine.length > 0
    );
  };

  // Fetch morning and night routines
  const morningRoutineProducts = getMorningRoutineData(routineData);
  const nightRoutineProducts = getNightRoutineData(routineData);

  console.log("Morning Routine Products:", morningRoutineProducts);
  console.log("Night Routine Products:", nightRoutineProducts);

  // Function to render a table row
  const renderRoutineRow = (routine, days) => (
    <tr key={routine.id}>
      <td>{routine.productName || "No product name"}</td>
      <td>{routine.howToUse || "No instructions"}</td>
      <td>
        <div className="days-container">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <span
              key={day}
              className={`day ${days?.includes(day) ? "active" : ""}`}
            >
              {days?.includes(day) ? "●" : "○"}
            </span>
          ))}
        </div>
      </td>
      <td>
        <a
          href={routine.whereToBuy || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {routine.whereToBuy || "No link"}
        </a>
      </td>
    </tr>
  );

  return (
    <div>
      {/* Morning Routine */}
      {morningRoutineProducts.length > 0 && (
        <div className="routine-section morning">
          <h2>🌞 Morning Routine</h2>
          <table className="routine-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>How to Use</th>
                <th>Days</th>
                <th>Where to Buy</th>
              </tr>
            </thead>
            <tbody>
              {morningRoutineProducts.map((routine) =>
                renderRoutineRow(routine, routine.morningRoutine)
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Night Routine */}
      {nightRoutineProducts.length > 0 && (
        <div className="routine-section night">
          <h2>🌙 Night Routine</h2>
          <table className="routine-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>How to Use</th>
                <th>Days</th>
                <th>Where to Buy</th>
              </tr>
            </thead>
            <tbody>
              {nightRoutineProducts.map((routine) =>
                renderRoutineRow(routine, routine.nightRoutine)
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RoutineTable;
