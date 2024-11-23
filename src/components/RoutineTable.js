const RoutineTable = ({ routineData }) => {
  if (!routineData || routineData.length === 0) {
    return <p>Loading routines...</p>;
  }

  // console.log("Routine Data:", routineData);

  // Function to filter morning routines
  const getMorningRoutineData = (routineData) => {
    return routineData.filter(
      (routine) => routine.morningRoutine && routine.morningRoutine.length > 0
    );
  };

  // Fetch morning routines
  const morningRoutineProducts = getMorningRoutineData(routineData);

  // console.log("Morning Routine Products:", morningRoutineProducts);

  // Function to render a table row
  const renderRoutineRow = (routine, days) => (
    <tr key={routine.id}>
      <td>{routine.productName || "No product name"}</td>
      <td>{routine.howToUse || "No instructions"}</td>
      <td>
        <div className="days-container">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <div
              key={day}
              className={`day ${days?.includes(day) ? "active" : ""}`}
            >
              {days?.includes(day) ? "●" : "○"}
            </div>
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
      {morningRoutineProducts.length > 0 ? (
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
      ) : (
        <p>No morning routines found.</p>
      )}
    </div>
  );
};

export default RoutineTable;
