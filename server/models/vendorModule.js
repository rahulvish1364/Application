const mongoose = require('mongoose');




const connect = require('../controllers/DBConnection');
connect();
var vendorSchema = mongoose.Schema({
    vId : Number,
    name: String,
    food: [],
    contacts: {
        address : String ,
        mobileNo: Number
    },
  
  },{stict: false})

const Vendor = mongoose.model('vLogin', vendorSchema, false)

async function insertVendor() {
    const entry = new Vendor({
        name : "RAhul VIsh",
        vId: 4574,
        food: [{"asass": "Ravi"}, {sddas: "sdasdasd"}, {sdasa: 341231231}],
        unknown: "Let see if it works",
        contacts : {
            address : "sdakjkjlk sdjcsoidj",
            mobileNo: 23242342
        },
    })
    
    const result = await entry.save();
    entry.set("unknown" , true )
    console.log(result);
    
}

insertVendor();