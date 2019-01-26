const express = require('express');
const router=express.Router();

router.use(express.json());


////to connect mongodb......
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/EventManagement')
.then(()=> console.log("connected to mopngodb"))
.catch(err => console.log(' not connected',err))


//customer schema
const historySchema= new mongoose.Schema({
      cName: {type:String,required:true},
      vName: {type:String,required:true},
      cId:Number,
      vId:Number,
      bookingDate:{type:Date},
      eventDate:{type:Date},
      paymentAmount:Number,
      noOfGuest:Number,
      customerContact:[],
      vendorContact:[],
      eventName:String,
      food:[],
      decoration:[],
      venue:[]
},{collection:"history"},{strict:false});


const User=mongoose.model('history',historySchema);
 
//getting complete history of both vendor and customer
router.get('/history', async(req,res) => {
     const user=await User.find();
     res.send(user);
});


router.post('/api/history',async(req,res)=>{

    var data = req.body;
    let user =new User({
        vId: data.vId,
        cId:data.cId,
        vName:data.cName,
        cNmae:data.vName,
        bookingDate:data.bookingDate,
        eventDate:data.eventDate,
        paymentAmount:data.paymentAmount,
        noOfGuest:data.noOfGuest,
        customerContact:data.customerContact,
        vendorContact:data.vendorContact,
        eventName:data.eventName,
        food:data.food,
        decoration:data.decoration,
        venue:data.venue,
});   
 const result =  await user.save();
 console.log(result);
 res.send("successfully stored order/order history");
});


router.get('/user/:cId', async(req,res) => {
    // var data = req.body;
    // var userId=data.cId,
    const user=await User.find(c=>c.cId== parseInt(req.params.cId));
    res.send(user);
});


router.get('/vendor/:vId', async(req,res) => {
    // var data = req.body;
    // var userId=data.vId,
    const user=await User.find(c=>c.vId== parseInt(req.params.vId));
    res.send(user);
});

module.exports=router;

// app.listen(3010,()=>

//     console.log("runnnimg at 3010")

// );