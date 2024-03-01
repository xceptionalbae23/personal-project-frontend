import React, { useState } from "react";
import './CSS/SeatSelection';

function SeatSelection() {

  const availableSeats = [
    { id: 1, seatNumber: "A1", status: "available" },
    { id: 2, seatNumber: "A2", status: "available" },
    { id: 3, seatNumber: "A3", status: "available" },
   
  ];

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
  };

  const renderSeats = () => {
    return availableSeats.map((seat) => (
      <div
        key={seat.id}
        className={`seat ${seat.status} ${
          selectedSeat && selectedSeat.id === seat.id ? "selected" : ""
        }`}
        onClick={() => handleSeatSelection(seat)}
      >
        {seat.seatNumber}
      </div>
    ));
  };

  return (
    <div className="seat-selection-container">
      <h2>Choose Your Seat</h2>
      <div className="seats">{renderSeats()}</div>
      <button disabled={!selectedSeat} onClick={() => console.log("Proceed")}>
        PROCEED
      </button>
    </div>
  );
}

export default SeatSelection;
