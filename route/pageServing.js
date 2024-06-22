const express = require("express");

const { loginPage, signupPage, dashboardPage, postCreatingPage, homepage, profilepage } = require("./../controller/pageserver")

const route = express.Router();

route.get("/", homepage);
route.get("/login", loginPage);
route.get("/signup", signupPage);
route.get("/profile/:id",profilepage);
route.get("/dashboard", dashboardPage);
route.get("/createpost", postCreatingPage);

module.exports = route;