import mongoose from "mongoose";


let Product = mongoose.Schema({
    name:String,
    price:Number,
    description:String
})

