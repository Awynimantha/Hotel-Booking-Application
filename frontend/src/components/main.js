import axios from "axios"

import React, { useEffect, useState } from "react"
import {Link, link,Navigate,useNavigate} from "react-router-dom"
const Advertisement_view_main= props=>{
    const [advertisements,setAdvertisement]=useState([])


    useEffect(()=>{
        getAllAdvertisement()
    },[])
   
    const getAllAdvertisement=()=>{
       
        axios.get("http://localhost:5000/api/advertisement/getall").then(respond=>{
            setAdvertisement(respond.data)
            
            
        })
    }
  

   
    return(
        <div>
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
        </div>

    )    
}
export default Advertisement_view_main