import React from "react"
import "../App"

export default function RoomForm(){
    return(
        <div className="room-main">
            <form className="room--form">
                <h1>Best Rooms for Your Satisfaction</h1>
                <label>Hotel name :<input type="text" /></label>
                <label>Facilities   :<input type="text" /></label>
                <label>Location :<input type="text" /></label>
                <label>Price    :<input type="text"/></label>
                <button className="btn">Submit</button>
                
            </form>
            <div className="room--image">
                <img src="r1.jpg"/>
                <img src="r2.jpg"/>
               
            </div>
        </div>
    )
}
