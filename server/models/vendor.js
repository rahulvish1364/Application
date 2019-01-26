const mongoose= require('mongoose');


const vendorSchema= new mongoose.Schema({
    vId:Number,
    userName: {type:String},
    email:String,
    password:String, 
    date:{type:Date ,default:Date.now},
    rating:Number,
    contact:[],
    event:[],
    food:[],
    decoration:[],
    venue:[]
},{collection:"vDetails"},{strict:false});


module.exports=mongoose.model('vDetails',vendorSchema);