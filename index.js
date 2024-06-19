const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    name : String,
});

const User = mongoose.model("User",user);

mongoose.connect("mongodb://127.0.0.1:27017/newuser");

const creatinguser = async (req,res)=>{
    const newuser = await User.create({
        name : "sahil"
    })
    res.send(newuser);
}

app.get("/:x",creatinguser);

app.listen(3000,()=>{
    console.log('server is running');
})