import React from "react"
import "../App.css"


export default function Navbar(){
    return(
    <nav className="navbar">
        <img src="logo.png"/>
        <ul className="nav--items">
            <li>Rooms</li>
            <li>Hotels</li>
            <li>Sign in</li>
        </ul>
    </nav>)
}