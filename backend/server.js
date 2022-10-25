const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose") 

require('dotenv').config()
const port=process.env.PORT || 5000
const url=process.env.URL
const app=express()
mongoose.connect(url,{
    useNewUrlParser:true
});

app.use(express.json())
app.use(cors())
//Routes
const hotelRoutes=require("./routes/hotel")
const bookingRoutes=require("./routes/booking")
const roomRoutes=require("./routes/room")
const advertisemnetsRoutes=require("./routes/advertisement")



app.use('/api/hotel',hotelRoutes)
app.use('/api/booking',bookingRoutes)
app.use('/api/room',roomRoutes)
app.use('/api/advertisement',advertisemnetsRoutes)

app.listen(port,()=>{
    console.log("listeninig")
})