const express = require("express");

const {login} = require("./../controller/pageserver;")

const route = express.Router;

route.get("/login",login);