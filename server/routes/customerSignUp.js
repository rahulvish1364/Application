const express = require('express');
const router=express.Router();
router.use(express.json());
const User=require("../models/customer");

////to connect mongodb......
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/EventManagement')
.then(()=> console.log("connected to mopngodb"))
.catch(err => console.log(' not connected',err))



//const User=mongoose.model('cLogin',customerSchema);
 
//getting complete details of customer
// app.get('/clogin', async(req,res) => {
//      const user=await User.find();
//      res.send(user);
// });

router.post('/',async(req,res)=>{
   const usercount=await User.find().count();
   console.log(usercount);
    
    var data = req.body;
    
    const usercheck=await User.find({email:data.email}).count();
    if(usercheck==1){
        res.send("already registered please login");
    }
    else{
    let user =new User({
        cId: usercount+8001,
        cName:data.cName,
        email:data.email,
        password:data.password,
        contact:data.contact,
 });   
 const result =  await user.save();
 console.log(result);
 res.send("successfully register");

}});




module.exports =router;
//app.listen(3020,()=> console.log("runnnimg at 3020"));