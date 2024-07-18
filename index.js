const express = require("express");
const app=express();

const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/invoice");

const userSchema= new mongoose.Schema({
        name:String,
        mobile:Number,
})

const userModel= mongoose.model("users",userSchema);

app.get('/getUsers',(req,res)=>{
    userModel.find({}).then(function(users){
        res.json(users);
    }).catch(function(err){
        console.log(err);
    });
})
// app.get('/',( req,res) =>{
//     res.send("Hello World");
// });
//  const user=require("./api/routers/users/user");


const PORT=3001;
 app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
 });