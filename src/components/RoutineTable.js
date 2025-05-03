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

  const whereToBuyLink = (routine, isDesktop) => {
    return (
      <div
        className={`where-to-buy-container ${isDesktop ? "desktop" : "mobile"}`}
      >
        <a
          href={routine.whereToBuy || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {routine.whereToBuy || "No link"}
        </a>
      </div>
    );
  };

  const showRoutineContents = (routine, days) => {
    return (
      <div key={routine.id} className="routine-row">
        {/* F */}
        <div className="mobile">Product</div>
        {/* A */}
        <div className="product-name">
          <p>{routine.productName || "No product name"}</p>
        </div>
        <div className="mobile">Where to Buy</div>
        {/* D */}
        {whereToBuyLink(routine, false)}
        {/* B */}
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
        {/* C */}
        {whereToBuyLink(routine, true)}
      </div>
    );
  };
  return (
    <div className="container">
      {/* Morning Routine */}
      {/* Karen Test */}
      {morningRoutineProducts.length > 0 && (
        <div className="routine-section morning">
          <div className="top-morning">
            <img src="../images/mage_sun.svg" alt="sun" />
            <h2>Morning Routine</h2>
          </div>

          <div className="routine-container">
            {/* E */}
            <div className="routine-table-header desktop">
              <div className="product">Product</div>
              <div className="how-to-use">How to Use</div>
              <div className="where-to-buy">Where to Buy</div>
            </div>
            <div className="routine-table-content ">
              {morningRoutineProducts.map((routine) => {
                console.log("Routine:", routine);
                const days = routine.morningRoutine;

                return (
                  <div key={routine.id} className="routine-row">
                    {/* F */}
                    <div className="mobile">Product</div>
                    {/* A */}
                    <div className="product-name">
                      <p>{routine.productName || "No product name"}</p>
                    </div>
                    <div className="mobile">Where to Buy</div>
                    {/* D */}
                    {whereToBuyLink(routine, false)}
                    {/* B */}
                    <div className="how-to-use-container">
                      <div className="days-container">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                          (day) => (
                            <div key={day} className="day-wrapper">
                              <div className="day-name">{day}</div>
                              <div
                                className={`day ${
                                  days?.includes(day) ? "active" : ""
                                }`}
                              >
                                {days?.includes(day) ? "●" : "○"}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="instructions">
                        {routine.howToUse || "No instructions"}
                      </div>
                    </div>
                    {/* C */}
                    {whereToBuyLink(routine, true)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* Night Routine */}
      {nightRoutineProducts.length > 0 && (
        <div className="routine-section night">
          <div className="top-night">
            <img src="../images/mage_moon.svg" alt="moon" />
            <h2>Night Routine</h2>
          </div>

          <div className="routine-container">
            <div className="routine-table-header desktop">
              <div className="product">Product</div>
              <div className="how-to-use">How to Use</div>
              <div className="where-to-buy">Where to Buy</div>
            </div>
            <div className="routine-table-content ">
              {nightRoutineProducts.map((routine) => {
                console.log("Routine:", routine);
                const days = routine.nightRoutine;

                return (
                  <div key={routine.id} className="routine-row">
                    <div className="product-name">
                      {routine.productName || "No product name"}
                    </div>
                    <div className="how-to-use-container">
                      <div className="days-container">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                          (day) => (
                            <div key={day} className="day-wrapper">
                              <div className="day-name">{day}</div>
                              <div
                                className={`day ${
                                  days?.includes(day) ? "active" : ""
                                }`}
                              >
                                {days?.includes(day) ? "●" : "○"}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="instructions">
                        {routine.howToUse || "No instructions"}
                      </div>
                    </div>
                    <div className="where-to-buy-container">
                      <a
                        href={routine.whereToBuy || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {routine.whereToBuy || "No link"}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutineTable;
