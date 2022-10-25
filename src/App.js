import Navbar from "./components/navbar"
import Footer from "./components/footer.component"
import RoomForm from "./components/room-form";
import Room_view from "./components/room-view";
import {Routes,Route,Link} from "react-router-dom"



function App() {
  return (
    <div>
       <nav className="navbar">
        <img src="logo.png"/>
        <ul className="nav--items">
            <li><Link to={"/room-form"}>Rooms</Link></li>
            <li><Link to={"/hotel"}>Hotels</Link></li>
            <li><Link to={"/signin"}>Sign in</Link></li>
        </ul>
      </nav>
      <div>
      <Routes>
        <Route path="/room-form" element={<RoomForm/>}/>
        <Route  path="/room-view"  element={<Room_view/>}/>

      </Routes>
      </div>
      <Footer />
    </div>
    
  )  
}

export default App;
