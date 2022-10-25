import React from "react"

export default function Booking_view(){
    return(
        <div className="room-main">
       
            <table className="tbl"><caption>List of Bookings</caption>
            <thead>
                <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Hotel Name</th>
                    <th scope="col">Room No.</th>
                    <th scope="col">Check-in Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Customer Name"> ABC </td>
                    <td data-label="Hotel Name"> ABC </td>
                    <td data-label="Room No."> ABC </td>
                    <td data-label="Check-in Date"> ABC </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
