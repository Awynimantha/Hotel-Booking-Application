import React from "react"
import "../App"

export default function HotelForm(){
    return(
        <div className="hotel-main">
            <form className="hotel--form">
                <h1>Add Hotel</h1>
                <label>Hotel Name<input type="text" /></label>
                <label>Type<input type="text" /></label>
                <label>Number of Rooms<input type="text" /></label>
                <label>Location<input type="text" /></label>
                <label>Packages<input type="text"/></label>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
