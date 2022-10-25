import React from "react"
import "../index.css"


export default function footer(){
    return(
    <footer className="footer">
        <div>
            Our services
            <ul className="footer--content">
                <li>Booking</li>
                <li>Travelling partner</li>
            </ul>
        </div>
        <div>
            About us
            <ul className="footer--content">
                <li>Our Hotels</li>
                <li>Our Team</li>
            </ul>
        </div>
        <div>
            Contact us
            <ul className="footer--content">
                <li>call us :463648376836</li>
                <li>email us: info@vis.com</li>
            </ul>
        </div>
    </footer>
    )
}