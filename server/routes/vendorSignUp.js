const express = require('express');
const router=express.Router();
router.use(express.json());

const User=require('../models/vendor');  

////to connect mongodb......
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/EventManagement')
.then(()=> console.log("connected to mopngodb"))
.catch(err => console.log(' not connected',err))

// //vendor schema.............
// const vendorSchema= new mongoose.Schema({
//       userName: {type:String,required:true},
//       email:String,
//       password:String, 
//       date:{type:Date ,default:Date.now},
//       rating:Number,
//       contact:[],
//       event:[],
//       food:[],
//       decoration:[],
//       venue:[]
// },{collection:"vDetails"},{strict:false});


// const User=mongoose.model('vDetails',vendorSchema);
 
//getting complete deatails of vendor
// app.get('/vlogin', async(req,res) => {
//      const user=await User.find();
//      res.send(user);
// });



router.post('/',async(req,res)=>{
 
    var data = req.body;
    const userdata=await User.find().count();
    const usercheck=await User.find({email:data.email}).count();
    if(usercheck==1){
        res.send("already registered please login");
    }
    else{
    
    let user =new User({
        vId: userdata+1001,
        userName:data.UserName,
        email:data.email,
        password:data.password,
        status:false,
        rating:data.rating,
        contact:data.contact,
        event:data.event,
        food:data.food,
        decoration:data.decoration,
        venue:data.venue,
});   
 const result =  await user.save();
 console.log(result);
 res.send("successfully registered </br><B>wait for get verified</B>");
}});

module.exports=router;

// router.listen(3010,()=>
//     console.log("runnnimg at 3100")
// );