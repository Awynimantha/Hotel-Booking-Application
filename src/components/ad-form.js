import React, { Component, useEffect, useState } from "react"
import "../App"
import {Routes,Route,Link} from "react-router-dom"
import  adServices from "../services/adServices"
import axios from "axios"

const AdForm= props =>{
    const [ads,setAds]=useState([])
    const [title1,setAd]=useState("")
    const [description,setDescription]=useState("")
    const [title2,setHotel]=useState("")
    const [title3,setValidityPeriod]=useState(0)
    
    const onChangetitle1=(e)=>{
        const title1=e.target.value
        setTitle1(title1)
        
    }
    const onChangetitle2=(e)=>{
        const title2=e.target.value
        setTitle2(title2)
        
    }
    const onChangetitle3=(e)=>{
        const title3=e.target.value
        setTitle3(title3)
        
    }
    const onChangedescription=(e)=>{
        const description=e.target.value
        setDescription(description)
        
    }
    
    const addad=(e)=>{
    
        const data={
            title1:Ad_name,
            description:Description,
            title2:Hotel_name,
            title3:ValididyPeriod
        }
        axios.post("http://localhost:5000/api/ad/add",data).then((response)=>console.log(response)).catch((err)=>console.log(err))
        //adServices.createRoom(data)
        console.log(data)

        return(
            <div className="ad-main">
                <form className="ad-form">
                    <h1>Add Advertisement</h1>
                    <label>title1:<input type="text" value={title1} onChange={onChangetitle1}/></label><br></br>
                    <label>description:<input type="text" value={description} onChange={onChangedescription} /></label><br></br>
                    <label>title2:<input type="text" value={title2} onChange={onChangetitle2}/></label><br></br>
                    <label>title3:<input type="text" value={title3} onChange={onChangetitle3}/></label><br></br>
                    <button className="btn" onClick={addad}>Submit</button>
                </form>
                <div>
                <h4>To view ads click <Link to={"/ad-view"}>Here</Link></h4>
                </div>
            </div>
        )
    }

export default AdForm
