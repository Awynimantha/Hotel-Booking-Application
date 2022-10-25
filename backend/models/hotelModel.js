const mongoose=require("mongoose")

const Schema=mongoose.Schema

const hotelSchema=new Schema({
    name:{type:String,require:true},
    location:{type:String,require:true},
    available_rooms:{type:Number,require:true},
    description:{type:String,require:true}

})

const hotel=mongoose.model("hotel",hotelSchema)
module.exports=hotel