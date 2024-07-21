const express = require("express");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { contact } = require("../controllers/contact");
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/contact", contact);

module.exports = router;
