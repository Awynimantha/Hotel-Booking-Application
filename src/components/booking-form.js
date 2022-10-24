import React from "react"
import "../App"

export default function BookingForm(){
    return(
        <div className="room-main">
            <form className="room--form">
                <h1>Reserve a room </h1>
                <label>Customer Name :  <input type="text" /></label>
                <label>Hotel Name :     <input type="text" /></label>
                <label>Room No.   :     <input type="text" /></label>
                <label>Check-in Date :  <input type="text" /></label>
                <label>Check-Out Date : <input type="text"/></label>
                <button className="btn">Submit</button>
                
            </form>
            <table className="tbl"><caption>List of Bookings</caption>
            <thead>
                <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Hotel Name</th>
                    <th scope="col">Room No.</th>
                    <th scope="col">Check-in Date</th>
                    <th scope="col">Check-out Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Customer Name"> ABC </td>
                    <td data-label="Hotel Name"> ABC </td>
                    <td data-label="Room No."> ABC </td>
                    <td data-label="Check-in Date"> ABC </td>
                    <td data-label="Check-out Date"> ABC </td>
                </tr>
                <tr>
                    <td data-label="Customer Name"> ABC </td>
                    <td data-label="Hotel Name"> ABC </td>
                    <td data-label="Room No."> ABC </td>
                    <td data-label="Check-in Date"> ABC </td>
                    <td data-label="Check-out Date"> ABC </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
