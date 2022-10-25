import React, { Component, useEffect, useState } from "react"
import "../App"
import {Routes,Route,Link} from "react-router-dom"
import  adServices from "../services/roomServices"
import axios from "axios"

const AdForm= props =>{
    const [ads,setAds]=useState([])
    const [Title1,setTitle1]=useState("")
    const [Description,setDescription]=useState("")
    const [Title2,setTitle2]=useState("")
    const [Title3,setTitle3]=useState("")
    
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
            title1:Title1,
            description:Description,
            title2:Title2,
            title3:Title3
        }
        axios.post("http://localhost:5000/api/advertisement/add",data).then((response)=>console.log(response)).catch((err)=>console.log(err))
        //roomServices.createRoom(data)
        console.log(data)
    }

        return(
            <div className="ad-main">
                <form >
                    <h1>Add Advertisement</h1>
                   
                    <label>title1:</label><input type="text" value={Title1} onChange={onChangetitle1}/><br></br>
                    <label>description:</label><input type="text" value={Description} onChange={onChangedescription} /><br></br>
                    <label>title2:</label><input type="text" value={Title2} onChange={onChangetitle2}/><br></br>
                    <label>title3:</label><input type="text" value={Title3} onChange={onChangetitle3}/><br></br>
                    
                    <button className="btn" onClick={addad}>Submit</button>
                </form>
                <div>
                <h4>To view ads click <Link to={"/ad-view"}>Here</Link></h4>
                </div>
            </div>
        )
    }

export default AdForm
