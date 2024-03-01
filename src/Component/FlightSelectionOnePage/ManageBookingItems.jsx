import React, { useRef } from "react";

function ManageBooking() {
   
    const reservationInputRef = useRef(null);


    const handleSearchReservation = () => {
     
        const reservationCode = reservationInputRef.current.value;

        console.log("Searching for reservation with code:", reservationCode);
    };

    return (
        <div className='manage-bookings'>
            <div className="manage-bookings-header">Manage Bookings </div>
            <input
                type="text"
                ref={reservationInputRef} placeholder='Enter ' className="manage-input"
            />
           <div> 
            <button onClick={handleSearchReservation} className="manage-btn">Search Reservation</button>
            </div>
        </div>
    );
}

export default ManageBooking;
