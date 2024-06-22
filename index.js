const express = require("express");
const path = require("path");
const app = express();
const cookieparser = require("cookie-parser");
require('dotenv').config();

const fileRoutes = require("./route/pageServing");
const apiRoutes = require("./route/api");
const { connectDB } = require("./config/db");

// connection to db
connectDB("instaClone");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieparser());

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

// serving pages
app.use("/",fileRoutes);
// serving api
app.use("/api",apiRoutes);


app.listen(3000,()=>{
    console.log("server started");
});