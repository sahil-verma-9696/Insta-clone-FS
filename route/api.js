const express = require("express");
const { signup, login } = require("../controller/user");
const { createPost } = require("../controller/post");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/createpost", createPost);


module.exports = router;