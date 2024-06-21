const express = require("express");
const path = require("path");
const app = express();

const fileRoutes = require("./route/pageServing");
const apiRoutes = require("./route/api");

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

// serving pages
app.use("/page",fileRoutes);
// serving api
app.use("/api",apiRoutes);


app.listen(3000,()=>{
    console.log("server started");
});