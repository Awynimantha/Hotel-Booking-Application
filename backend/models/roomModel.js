const mongoose=require("mongoose")

const Schema=mongoose.Schema

const roomSchema=new Schema({
    hotel:{type:String,required:true},
    facility:{type:String,required:true},
    price:{type:Number,required:true},
    location:{type:String,required:true}

})

const Room=mongoose.model('Room',roomSchema)
module.exports=Room

