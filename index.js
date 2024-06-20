const express  = require("express");
const app = express();

const path = require("path");

const PORT = 3000;

// setting views
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

// page serving routes
app.use();

app.listen(PORT,()=>{
    console.log("server is running");
})