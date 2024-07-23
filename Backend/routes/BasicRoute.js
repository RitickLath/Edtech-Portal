const express = require("express");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { contact } = require("../controllers/contact");
const { verification } = require("../controllers/verification");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post("/signup", signup);

router.post("/verfication", authentication, verification);

router.post("/login", login);

router.post("/contact", contact);

module.exports = router;
