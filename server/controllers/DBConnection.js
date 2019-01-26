const mongoose = require('mongoose');


module.exports = async function connection(params) {
   await mongoose.connect('mongodb://localhost:27017/EventManagement', {useNewUrlParser: true}, (err)=>{
        if(!err) console.log("Mongo COnnected");
        else console.log("Errro in connection", err);
        });    
}

