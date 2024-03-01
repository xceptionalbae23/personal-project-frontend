import React from 'react';

function FlightInformation(props) {
  const { fromAirport, toAirport, departureDateTime, arrivalDateTime, flightDuration, flightNumber } = props;

  return (
    <div className="flight-information">
      <h2>Flight Information</h2>
      <p><strong>From:</strong> {fromAirport}</p>
      <p><strong>To:</strong> {toAirport}</p>
      <p><strong>Departure Date and Time:</strong> {departureDateTime}</p>
      <p><strong>Arrival Date and Time:</strong> {arrivalDateTime}</p>
      <p><strong>Flight Duration:</strong> {flightDuration}</p>
      <p><strong>Flight Number:</strong> {flightNumber}</p>
    </div>
  );
}

export default FlightInformation;
