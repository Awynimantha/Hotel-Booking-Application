const mongoose=require("mongoose")

const Schema=mongoose.Schema

const bookingSchema=new Schema({
    customer_name:{type:String,required:true},
    hotel_name:{type:Number,required:true},
    room_number:{type:String,required:true},
    checking_date:{type:String,required:true},



})

const booking=mongoose.model("booking",bookingSchema)
module.exports=booking