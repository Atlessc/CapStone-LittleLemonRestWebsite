import React, { useState } from "react";

const occasions = ["Birthday", "Anniversary", "Graduation", "Wedding", "Holiday"];


function Reservations() {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [reservationData, setReservationData] = useState({
    mainName: "",
    date: "",
    time: "",
    partySize: 0,
    occasion: "",
  });

  const handleNameChange = (e) => {
    setReservationData({ ...reservationData, mainName: e.target.value });
  };

  const handleDateChange = (e) => {
    setReservationData({ ...reservationData, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setReservationData({ ...reservationData, time: e.target.value });
  };

  const handlePartySizeChange = (e) => {
    setReservationData({ ...reservationData, partySize: parseInt(e.target.value) });
  };

  const handleOccasionChange = (e) => {
    setReservationData({ ...reservationData, occasion: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsBookingConfirmed(true);
  };

  return (
    <div>
      {isBookingConfirmed ? (
        <p>
          Booking confirmed! Thank you, {reservationData.mainName}, for booking a reservation on{" "}
          {reservationData.date}.
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" value={reservationData.mainName} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Date:
            <input type="date" value={reservationData.date} onChange={handleDateChange} />
          </label>
          <br />
          <label>
            Time:
            <input type="time" value={reservationData.time} onChange={handleTimeChange} />
          </label>
          <br />
          <label>
            Party Size:
            <input type="number" value={reservationData.partySize} onChange={handlePartySizeChange} />
          </label>
          <br />
          <label>
            Occasion:
            <select value={reservationData.occasion} onChange={handleOccasionChange}>
              <option value="">Select an occasion</option>
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">Book Reservation</button>
        </form>
      )};
    </div>
  );
}

export default Reservations;
