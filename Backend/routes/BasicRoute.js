const express = require("express");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { contact } = require("../controllers/contact");
const { verification } = require("../controllers/verification");
const { authentication } = require("../middleware/authentication");
const User = require("../models/User");
const { userDetails } = require("../controllers/userDetails");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/userDetails", authentication, userDetails);

router.post("/signup", signup);

router.post("/verfication", authentication, verification);

router.post("/login", login);

router.post("/contact", contact);

router.post("/dashboard", authentication, async (req, res) => {
  try {
    if (!req.userId) {
      res.status(400).json({ success: false, message: "User Not verified" });
    }
    const user = await User.findById(req.userId);
    if (user.isVerified) {
      return res.status(200).json({ success: true, message: "User verfied" });
    }
  } catch (e) {
    console.log("Error occured while verification", e);
    return res
      .status(500)
      .json({ success: false, message: "Error Occured while verification" });
  }
});

module.exports = router;
