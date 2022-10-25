import axios from "axios"

import React, { useEffect, useState } from "react"
import {Link, link,Navigate,useNavigate} from "react-router-dom"
const Advertisement_view= props=>{
    const [advertisements,setAdvertisement]=useState([])
    const [searchName,setSearchName]=useState("")

    useEffect(()=>{
        getAllAdvertisement()
    },[])
    const onChangeSearchName=(e)=>{
        const searchName=e.target.value
        setSearchName(searchName)
    }
    const getAllAdvertisement=()=>{
       
        axios.get("http://localhost:5000/api/advertisement/getall").then(respond=>{
            setAdvertisement(respond.data)
            
            
        })
    }
    const onSubmit=()=>{
        //e.preventDefualt()
       axios.get("http://localhost:5000/api/advertisement/"+searchName).then(respond=>{
            
           setAdvertisement([respond.data])
            console.log("http://localhost:5000/api/advertisement/"+searchName)
        
    })
    }
    const onDelete=()=>{
       // e.preventDefualt()
        axios.delete("http://localhost:5000/api/advertisement/"+searchName)
        
    }
    const navigate=useNavigate()
    function onUpdate(){
        navigate('advertisement-update')
    }
    const dbutton =()=>{if(advertisements.length==1) return( <button className=" dbtn" onClick={onDelete}>Delete</button>)}
    const ubutton=()=>{if(advertisements.length==1) return( <button className=" ubtn" onClick={onUpdate}>Update</button>)}
    
    return(
        <div>
        <div className="room-view--search">
            <input type="text" className="text" value={searchName} onChange={onChangeSearchName}/>
            <button className="btn" onClick={onSubmit}>Search</button>
            {dbutton() }
            {ubutton()}

            
        </div>
        <div className="adver--disaply">
        {
        
                advertisements.map((ad)=>{
                    return(
                        <div className="adver">
                             <div className="adver--text">
                                 <h2 className="adver--head-2">{ad.title1}</h2>
                                 <h3 className="adver--head-3">{ad.title2}</h3>
                                 <h3 className="adver--head-3">{ad.title3}</h3>
                                 <h4 className="adver--head-4">{ad.description}</h4>
                                 <p className="adver--head-p">{ad._id}</p>
                             </div>
                    </div>
                    )
                }
                
                )
            
            
        
        }
                
        
                
        </div>
        <div>
            <Link to={"/ad-form"}>Back</Link>
        </div>
        </div>

    )    
}
export default Advertisement_view