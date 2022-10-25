import React, { Component, useEffect, useState } from "react"
import "../App"
import {Routes,Route,Link} from "react-router-dom"

import axios from "axios"
const RoomUpdate= props =>{
    const [rooms,setRooms]=useState([])
    const [Hotel_name,setHotel]=useState("")
    const [Id,setId]=useState([])
    const [Facilities,setFacility]=useState("")
    const [Location,setLocation]=useState("")
    const [Price,setPrice]=useState(0)

    useEffect(()=>{
        getAllRooms()
    },[])
    
    const getAllRooms=()=>{
       
        axios.get("http://localhost:5000/api/room/getall").then(respond=>{
            setRooms(respond.data)
            
         
            
        })
    }
    const onChangeId=(e)=>{
        const id=e.target.value
        console.log(id._id)
        setId(id)
    }
    const onChangehotel=(e)=>{
        const hotel=e.target.value
        setHotel(hotel)
        
    }
    const onChangefacility=(e)=>{
        const facilities=e.target.value
        setFacility(facilities)
        
    }
    const onChangelocation=(e)=>{
        const location=e.target.value
        setLocation(location)
        
    }
    const onChangeprice=(e)=>{
        const price=e.target.value
        setPrice(price)
        
    }
    const updateRoom=()=>{
    
        const data={
            _id:Id,
            hotel:Hotel_name,
            facility:Facilities,
            price:Price,
            location:Location

        }
        axios.post("http://localhost:5000/api/room/update/"+Id,data).then((response)=>console.log(response)).catch((err)=>console.log(err))
        console.log("http://localhost:5000/api/room/update/"+Id)
        //roomServices.createRoom(data)
        console.log(data)
    }
    return(
        <div className="room-main">
            <form className="room--form">
                <h1>Update room detail</h1>
                
                <select onChange={onChangeId}>
                       {rooms.map(room=>{
                        return(<option value={room._id}>{room._id}-{room.hotel}</option>)
                       })} 
                 </select>  
               
                <label>Hotel name :<input type="text" value={Hotel_name} onChange={onChangehotel} /></label>
                <label>Facilities   :<input type="text" value={Facilities} onChange={onChangefacility}/></label>
                <label>Location :<input type="text" value={Location} onChange={onChangelocation}/></label>
                <label>Price    :<input type="text" value={Price} onChange={onChangeprice}/></label>
                <button className="btn" onClick={updateRoom}>Submit</button>
                
            </form>
            <div>
                <h4>To view rooms click <Link to={"/room-view"}>Here</Link></h4>
            </div>
            <div className="room--image">
                <img src="r1.jpg"/>
                <img src="r2.jpg"/>
               
            </div>
        </div>
    )
}

export default RoomUpdate