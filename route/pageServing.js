const express = require("express");

const { loginPage, signupPage } = require("./../controller/pageserver")

const route = express.Router();

route.get("/login", loginPage);
route.get("/signup", signupPage);

module.exports = route;