const mongoose=require("mongoose")

const Schema=mongoose.Schema

const adverSchema=new Schema({
    title1:{type:String,required:true},
    title2:{type:String,required:true},
    title3:{type:String,required:true},
    description:{type:String,required:true}

})

const Advertisement=mongoose.model('Advertisement',adverSchema)
module.exports=Advertisement

