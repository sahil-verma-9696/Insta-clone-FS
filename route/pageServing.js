const express = require("express");

const { loginPage, signupPage, dashboardPage, postCreatingPage } = require("./../controller/pageserver")

const route = express.Router();

route.get("/login", loginPage);
route.get("/signup", signupPage);
route.get("/dashboard", dashboardPage);
route.get("/createpost", postCreatingPage);

module.exports = route;