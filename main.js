//include express package
const express= require('express');
const dotenv = require('dotenv');
//create instance
const app =express();

//config the dotenv file
dotenv.config()


app.get('/' , (req , res)=>{

   res.send('hello from simple server get request')

})

//listen the incomming request

app.listen(process.env.PORT,()=>{
    console.log("server working");
})