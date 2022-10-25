import React, { Component, useEffect, useState } from "react"
import "../App"
import {Routes,Route,Link} from "react-router-dom"
import  hotelServices from "../services/hotelServices"
import axios from "axios"

const HotelForm= props =>{
    const [Hotels,setAds]=useState([])
    const [Name,setAd]=useState("")
    const [Location,setDescription]=useState("")
    const [Available_Rooms,setHotel]=useState("")
    const [Description,setValidityPeriod]=useState(0)
    
    const onChangeName=(e)=>{
        const name=e.target.value
        setName(name)
        
    }
    const onChangeLocation=(e)=>{
        const location=e.target.value
        setLocation(location)
        
    }
    const onChangeAvailableRooms=(e)=>{
        const available_rooms=e.target.value
        setAvailabeRooms(available_rooms)
        
    }
    const onChangeDescription=(e)=>{
        const description=e.target.value
        setDescription(description)
        
    }
    
    const addhotel=(e)=>{
    
        const data={
            name:Name,
            description:Description,
            location:Location,
            available_rooms:Available_Rooms
                }
        axios.post("http://localhost:5000/api/hotel/add",data).then((response)=>console.log(response)).catch((err)=>console.log(err))
        //hotelServices.createRoom(data)
        console.log(data)

        return(
            <div className="hotel-main">
                <form className="hotel-form">
                    <h1>Add Hotel</h1>
                    <label>name:<input type="text" value={Name} onChange={onChangeName}/></label><br></br>
                    <label>description:<input type="text" value={Description} onChange={onChangeDescription} /></label><br></br>
                    <label>location:<input type="text" value={Location} onChange={onChangeLocation}/></label><br></br>
                    <label>title3:<input type="text" value={Available_Rooms} onChange={onChangeAvailableRooms}/></label><br></br>
                    <button className="btn" onClick={addhotel}>Submit</button>
                </form>
                <div>
                <h4>To view ads click <Link to={"/hotel-view"}>Here</Link></h4>
                </div>
            </div>
        )
    }

export default HotelForm
