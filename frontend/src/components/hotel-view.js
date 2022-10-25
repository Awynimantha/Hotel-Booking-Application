import axios from "axios"

import React, { useEffect, useState } from "react"
import {Link, link,Navigate,useNavigate} from "react-router-dom"
const Hotel_view= props=>{
    const [hotels,setHotels]=useState([])
    const [searchName,setSearchName]=useState("")

    useEffect(()=>{
        getAllHotel()
    },[])
    const onChangeSearchName=(e)=>{
        const searchName=e.target.value
        setSearchName(searchName)
    }
    const getAllHotel=()=>{
       
        axios.get("http://localhost:5000/api/hotel/getall").then(respond=>{
            setHotels(respond.data)
            
            
            
            
        })
    }
    const onSubmit=()=>{
        //e.preventDefualt()
       axios.get("http://localhost:5000/api/hotel/"+searchName).then(respond=>{
            
           setHotels([respond.data])
            console.log("http://localhost:5000/api/hotel/"+searchName)
        
    })
    }
    const onDelete=()=>{
       // e.preventDefualt()
        axios.delete("http://localhost:5000/api/hotel/"+searchName)
        
    }
    const navigate=useNavigate()
    function onUpdate(){
        navigate('hotel-update')
    }
    const dbutton =()=>{if(hotels.length==1) return( <button className=" dbtn" onClick={onDelete}>Delete</button>)}
    const ubutton=()=>{if(hotels.length==1) return( <button className=" ubtn" onClick={onUpdate}>Update</button>)}
    
    return(
        <div>
        <div className="hotel-view--search">
            <input type="text" className="text" value={searchName} onChange={onChangeSearchName}/>
            <button className="btn" onClick={onSubmit}>Search</button>
            {dbutton() }
            {ubutton()}

            
        </div>
        <div className="hotel--cards--disaply">
        {
        
                hotels.map((hotel)=>{
                    return(
                        <div className="card">
                             <div className="card--text">
                                <p>ID {hotel.name}</p>
                                 <p>Hotel :{hotel.location}</p>
                                 <p>{hotel.available_rooms}</p>
                                 <p>{hotel.description}</p>
                             </div>
                        <div className="card--price">
                            <h3>Rs.{hotel.price}</h3>
                        </div>
                    </div>
                    )
                }
                
                )
            
            
        
        }
                
        
                
        </div>
        <div>
            <Link to={"/hotel-form"}>Back</Link>
        </div>
        </div>

    )    
}
export default Hotel_view