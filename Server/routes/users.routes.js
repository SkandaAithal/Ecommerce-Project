const express = require("express");
const { signup, login, verifyotp } = require("../controllers/users.controller");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/verifyotp", verifyotp);
module.exports = router;
