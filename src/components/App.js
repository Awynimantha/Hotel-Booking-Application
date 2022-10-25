import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import Hotel from "./pages/hotel/Hotel";
// import HotelUpdate from "./pages/hotel/HotelUpdate";

import Ad from "./pages/ad/Ad";
import AdUpdate from "./pages/ad/Adupdate";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/hotel" element={<Hotel/>}/>
  //       <Route path="/hotelupdate" element={<HotelUpdate/>}/>
  //     </Routes>
  //   </BrowserRouter>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ad" element={<Ad/>}/>
        <Route path="/adupdate" element={<AdUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;