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
const { courses } = require("../controllers/courses");

// USER SIGNUP
router.post("/signup", signup);

// OTP VERIFICATION
router.post("/verfication", verification);

// USER LOGIN
router.post("/login", login);

// CONTACT US
router.post("/contact", contact);

// GET ALL COURSES
router.get("/courses", courses);

// GET ALL THE DETAILS OF USER (PERSONAL DETAILS, COURSES BOUGHT/COURSES SELLING)
router.get("/userDetails", userDetails);

// UPDATE PERSONAL INFORMATION
router.post("/update", async (req, res) => {
  // get data
  try {
    const {
      firstName,
      email,
      lastName,
      dob,
      gender,
      contactNumber,
      about,
      location,
      bio,
    } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user with provided email exists",
      });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (dob) user.DOB = dob;
    if (gender) user.gender = gender;
    if (contactNumber) user.phoneNumber = contactNumber;
    if (about) user.headline = about;
    if (location) user.location = location;
    if (bio) user.bio = bio;

    await user.save();

    res.status(200).json({ success: true, message: "User Updated", user });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "User not Updated due to internal server Error",
      error: e,
    });
  }
});

module.exports = router;
