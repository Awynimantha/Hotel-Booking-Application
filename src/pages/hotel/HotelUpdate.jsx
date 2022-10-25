import React from 'react'
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import HotelUpdateForm from '../../components/hotel-update';
 const HotelUpdate = ()=>{
    return(
    <div>
      <Navbar />
      <HotelUpdateForm />
      <Footer />
    </div>
  )  
}

 export default HotelUpdate