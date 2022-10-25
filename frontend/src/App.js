import Navbar from "./components/navbar"
import Footer from "./components/footer.component"
import RoomForm from "./components/room-form";
import Room_view from "./components/room-view";
import {Routes,Route,Link} from "react-router-dom"
import RoomUpdate from "./components/room-update";
import BookingForm from "./components/booking-view";
import AdForm from "./components/ad-form";
import HotelForm from "./components/hotel-form";
import Advertisement_view from "./components/ad-view";
import Advertisement_view_main from "./components/main";
import Hotel_view from "./components/hotel-view";

function App() {
  return (
    <div>
       <nav className="navbar">
        <img src="logo.png"/>
        <ul className="nav--items">
            <li><Link to={"/room-form"}>Rooms</Link></li>
            <li><Link to={"/hotel-form"}>Hotels</Link></li>
            <li><Link to={"/booking"}>Booking</Link></li>
            <li><Link to={"/ad-form"}>Advertisement</Link></li>
        </ul>
      </nav>
      <div>
      <Routes>
        <Route path="/room-form" element={<RoomForm/>}/>
        <Route  path="/room-view"  element={<Room_view/>}/>
        <Route path="/room-view/room-update" element={<RoomUpdate/>}/>
        <Route path="/booking" element={<BookingForm/>}/>
        <Route path="/ad-form" element={<AdForm/>}/>
        <Route path="ad-view" element={<Advertisement_view/>}/>
        <Route path="/hotel-form" element={<HotelForm/>}/>
        <Route path="/" element={<Advertisement_view_main/>}/>
        <Route path="/hotel-view" element={<Hotel_view/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
    
  )  
}

export default App;
