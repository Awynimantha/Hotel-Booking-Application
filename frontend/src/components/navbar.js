import React from "react"
import "../App.css"
import {Switch,Route,Link} from "react-router-dom"
import RoomForm from "./room-form"

export default function Navbar(){
    return(
    <nav className="navbar">
        <img src="logo.png"/>
        <ul className="nav--items">
            <li><Link to={"/room-form"}>Rooms</Link></li>
            <li><Link to={"/hotel"}>Hotels</Link></li>
            <li><Link to={"/signin"}>Sign in</Link></li>
        </ul>
    </nav>)
}