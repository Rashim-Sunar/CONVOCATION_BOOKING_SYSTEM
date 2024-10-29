// src/App.jsx
import React, { useState, useEffect } from "react";

const BookingTable = () => {
  const totalRows = 50;
  const seatsPerRow = 26;
  const gapIndexStart = 13;
  const gapIndexEnd = 15;

  const [bookedSeats, setBookedSeats] = useState(
    JSON.parse(localStorage.getItem("bookedSeats")) || {}
  );

  const handleSeatToggle = (seatLabel) => {
    if (!bookedSeats[seatLabel]) {
      setBookedSeats((prev) => ({
        ...prev,
        [seatLabel]: !prev[seatLabel]
      }));
    }
  };

  const bookSeats = () => {
    const newBookedSeats = { ...bookedSeats };
    Object.keys(bookedSeats).forEach((seat) => {
      if (bookedSeats[seat]) {
        newBookedSeats[seat] = true;
      }
    });
    localStorage.setItem("bookedSeats", JSON.stringify(newBookedSeats));
    alert("Selected seats have been booked!");
    setBookedSeats(newBookedSeats);
  };

  const generateSeatLabel = (col, row) => {
    return `${String.fromCharCode(65 + (col % 26))}${row}`;
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Seat Booking</h1>
      <div className="bg-gray-800 text-white py-2 px-4 rounded mb-6 text-center w-full font-semibold">
        STAGE
      </div>
      <div className="grid gap-y-2 bg-gray-100 p-4 rounded-lg max-w-5xl">
        {[...Array(totalRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2">
            {[...Array(seatsPerRow)].map((_, colIndex) => {
              const seatLabel = generateSeatLabel(colIndex, rowIndex + 1);

              if (colIndex >= gapIndexStart && colIndex <= gapIndexEnd) {
                return <div key={colIndex} className="w-8 h-8"></div>;
              }

              return (
                <div
                  key={colIndex}
                  className={`w-8 h-8 text-center rounded cursor-pointer ${
                    bookedSeats[seatLabel]
                      ? "bg-red-600"
                      : "bg-gray-300 hover:bg-green-400"
                  } ${
                    bookedSeats[seatLabel] === false ? "bg-green-500" : ""
                  }`}
                  onClick={() => handleSeatToggle(seatLabel)}
                >
                  {seatLabel}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button
        onClick={bookSeats}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Book Selected Seats
      </button>
    </div>
  );
}


export default BookingTable
