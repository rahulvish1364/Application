const express = require('express');
const router=express.Router();
router.use(express.json());

const User=require('../models/vendor');

////to connect mongodb......
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/EventManagement')
.then(()=> console.log("connected to mopngodb"))
.catch(err => console.log(' not connected',err))
//vendor schema.............

 
//getting complete deatails of vendor
router.post('/', async(req,res) => {
    var data = req.body;
    var Email=data.email;
    var pwd=data.password;
    
    const user=await User.find({email:Email,password:pwd})    
    const userStatus=await User.find({email:Email,password:pwd,status:true})
    console.log(user);
    
    if(user=='')
    {
        res.send("please register");
    }
    else if(userStatus=="")
    {
        res.send("yet to verified");
    }
    else{
        res.send(userStatus);
    }
});

router.put('/UpdateData',async(req,res)=>{
    var data = req.body;
    
    var id=data.vId;
    const user=await User.update({vId:id},{
        $set:{
            event:data.event,
            food:data.food,
            decoration:data.decoration,
            venue:data.venue,
        }
    });
       
 //const result =  await user.save();
 //console.log(result);
 res.send("data added");
});

module.exports=router;

//router.listen(3010,()=>console.log("runnnimg at 3010"));