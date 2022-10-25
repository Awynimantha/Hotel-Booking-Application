import axios from "axios"

import React, { useEffect, useState } from "react"
import {Link, link,Navigate,useNavigate} from "react-router-dom"
const Room_view= props=>{
    const [rooms,setRooms]=useState([])
    const [searchName,setSearchName]=useState("")

    useEffect(()=>{
        getAllRooms()
    },[])
    const onChangeSearchName=(e)=>{
        const searchName=e.target.value
        setSearchName(searchName)
    }
    const getAllRooms=()=>{
       
        axios.get("http://localhost:5000/api/room/getall").then(respond=>{
            setRooms(respond.data)
            
            
            
            
        })
    }
    const onSubmit=()=>{
        //e.preventDefualt()
       axios.get("http://localhost:5000/api/room/"+searchName).then(respond=>{
            
           setRooms([respond.data])
            console.log("http://localhost:5000/api/room/"+searchName)
        
    })
    }
    const onDelete=()=>{
       // e.preventDefualt()
        axios.delete("http://localhost:5000/api/room/"+searchName)
        
    }
    const navigate=useNavigate()
    function onUpdate(){
        navigate('room-update')
    }
    const dbutton =()=>{if(rooms.length==1) return( <button className=" dbtn" onClick={onDelete}>Delete</button>)}
    const ubutton=()=>{if(rooms.length==1) return( <button className=" ubtn" onClick={onUpdate}>Update</button>)}
    
    return(
        <div>
        <div className="room-view--search">
            <input type="text" className="text" value={searchName} onChange={onChangeSearchName}/>
            <button className="btn" onClick={onSubmit}>Search</button>
            {dbutton() }
            {ubutton()}

            
        </div>
        <div className="room--cards--disaply">
        {
        
                rooms.map((room)=>{
                    return(
                        <div className="card">
                             <div className="card--text">
                                <p>ID {room._id}</p>
                                 <p>Hotel :{room.hotel}</p>
                                 <p>{room.facility}</p>
                                 <p>{room.location}</p>
                             </div>
                        <div className="card--price">
                            <h3>Rs.{room.price}</h3>
                        </div>
                    </div>
                    )
                }
                
                )
            
            
        
        }
                
        
                
        </div>
        <div>
            <Link to={"/room-form"}>Back</Link>
        </div>
        </div>

    )    
}
export default Room_view