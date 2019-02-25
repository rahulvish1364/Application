const mongoose= require('mongoose');

//customer schema
const customerSchema= new mongoose.Schema({
    cId: Number,
    cName: {type:String},
    email:String,
    password:String, 
    date:{type:Date ,default:Date.now},
    contact: []
},{collection:"cLogin"},{strict:false});
//module.exports.customerSchema=customerSchema;
module.exports=mongoose.model('cLogin',customerSchema);