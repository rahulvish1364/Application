const express = require('express');
const router=express.Router();


router.use(express.json());

//const customerSchema=require("../models/customer");


const User=require("../models/customer");

////to connect mongodb......
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/EventManagement')
.then(()=> console.log("connected to mopngodb"))
.catch(err => console.log(' not connected',err))
//customer schema
  

//connection collection of database...


//const User=mongoose.model('cLogin',customerSchema);



//getting complete details of customer
// app.get('/cVerify', async(req,res) => {
//      const user=await User.find();
//      res.send(user);
// });
//getting data from body to check the data
router.post('/',async(req,res)=>{
    
    var data = req.body;
    var Email=data.email;
    var pwd=data.password;
     
    const user=await User.find({email:Email,password:pwd});
    console.log(user);
    
    if(user=='')
    res.send("please register");
    else 
    res.send(user);
});

module.exports=router;
//router.listen(3020,()=>console.log("runnnimg at 3020"));