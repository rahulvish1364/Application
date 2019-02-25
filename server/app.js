const UserSignIn =require('./routes/UserSignIn');
const customerSignUp= require('./routes/customerSignUp');
const history=require('./routes/history');
const vendorLoginVerify= require('./routes/vendorLoginVerify');
const vendorSignUp= require('./routes/vendorSignUp');
const express= require('express');
const app=express();
app.use(express.json());
app.use("/api/customeSingIn",UserSignIn);
app.use('/api/customeSignUp',customerSignUp);
app.use("/api/vendorSignUp",vendorSignUp);
app.use('/api/vendor',vendorLoginVerify);
app.use('/history',history);

app.listen(3010,()=>console.log("runnnimg at 3010")); 
