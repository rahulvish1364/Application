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
  
<<<<<<< HEAD
  },{stict: false})
=======
  },{collection : 'vLogin'},{stict: false})
>>>>>>> 7fc771c2a70c8ebf4d95748193e98ce969b3d39f

const Vendor = mongoose.model('vLogin', vendorSchema, false)

async function insertVendor() {
    const entry = new Vendor({
<<<<<<< HEAD
        name : "RAhul VIsh",
        vId: 4574,
        food: [{"asass": "Ravi"}, {sddas: "sdasdasd"}, {sdasa: 341231231}],
=======
        name : "sdasdasd",
        vId: 3231,
        food: [{"asass": "hgfghf"}, {sddas: "sdasdasd"}, {sdasa: 341231231}],
>>>>>>> 7fc771c2a70c8ebf4d95748193e98ce969b3d39f
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