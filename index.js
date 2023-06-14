
const express=require('express');
const app=express()

const cors = require("cors");
const PORT=4000

app.listen(PORT,()=>console.log(`server is working on ${PORT}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: '*',
    'Access-Control-Allow-Origin': '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use('/api/v1/sheet', require('./routes/user'))
 
module.exports=app