import "./RoutineTable.css";
import React, { useState, useEffect } from "react";

const RoutineTable = ({ routineData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile para telas menores ou iguais a 768px
    };

    // Escutar mudanças no tamanho da janela
    window.addEventListener("resize", checkMobile);
    checkMobile(); // Checar na inicialização

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!routineData || routineData.length === 0) {
    return <p>Loading routines...</p>;
  }

  const getMorningRoutineData = (routineData) => {
    return routineData.filter(
      (routine) => routine.morningRoutine && routine.morningRoutine.length > 0
    );
  };

  const getNightRoutineData = (routineData) => {
    return routineData.filter(
      (routine) => routine.nightRoutine && routine.nightRoutine.length > 0
    );
  };

  const morningRoutineProducts = getMorningRoutineData(routineData);
  const nightRoutineProducts = getNightRoutineData(routineData);

  const renderRoutineRow = (routine, days) => (
    <tr key={routine.id}>
      <td className="product-name">
        {routine.productName || "No product name"}
      </td>
      <td data-label="How to Use">
        <div className="how-to-use-container">
          <div className="days-container">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <div key={day} className="day-wrapper">
                <div className="day-name">{day}</div>
                <div className={`day ${days?.includes(day) ? "active" : ""}`}>
                  {days?.includes(day) ? "●" : "○"}
                </div>
              </div>
            ))}
          </div>
          <div className="instructions">
            {routine.howToUse || "No instructions"}
          </div>
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
    <div className="container">
      {/* Morning Routine */}
      {morningRoutineProducts.length > 0 && (
        <div className="routine-section morning">
          <div className="top-morning">
            <img src="../images/mage_sun.svg" alt="sun" />
            <h2>Morning Routine</h2>
          </div>
          <table className="routine-table">
            <thead>
              <tr>
                <th className="product">Product</th>
                <th className="how-to-use">How to Use</th>
                <th className="where-to-buy">Where to Buy</th>
              </tr>
              {/* Adiciona cabeçalhos extras somente para mobile */}
              {isMobile &&
                morningRoutineProducts.map((_, index) => (
                  <tr key={index}>
                    <th className="product">Product</th>
                    <th className="how-to-use">How to Use</th>
                    <th className="where-to-buy">Where to Buy</th>
                  </tr>
                ))}
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
          <div className="top-night">
            <img src="../images/solar_moon-linear.svg" alt="moon" />
            <h2>Night Routine</h2>
          </div>
          <table className="routine-table">
            <thead>
              <tr>
                <th className="product">Product</th>
                <th className="how-to-use">How to Use</th>
                <th className="where-to-buy">Where to Buy</th>
              </tr>
              {isMobile &&
                nightRoutineProducts.map((_, index) => (
                  <tr key={index}>
                    <th className="product">Product</th>
                    <th className="how-to-use">How to Use</th>
                    <th className="where-to-buy">Where to Buy</th>
                  </tr>
                ))}
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
