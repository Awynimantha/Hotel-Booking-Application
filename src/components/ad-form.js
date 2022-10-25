import React from "react"
import "../App"

export default function AdForm(){
    return(
        <div className="ad-main">
            <form className="ad-form">
                <h1>Add Advertisement</h1>
                <label>Advertisement Name<input type="text" /></label><br></br>
                <label>Description<input type="text" /></label><br></br>
                <label>Hotel Name<input type="text" /></label><br></br>
                <label>Location<input type="text" /></label><br></br>
                <label>Validity Period<input type="text"/></label><br></br>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
