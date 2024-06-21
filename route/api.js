const express = require("express");
const { signup } = require("./../controller/api");
const router = express.Router();

router.post("/signup",signup);


module.exports = router;