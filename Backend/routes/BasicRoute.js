const express = require("express");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { contact } = require("../controllers/contact");
const { verification } = require("../controllers/verification");
const { userDetails } = require("../controllers/userDetails");
const router = express.Router();
const { getAllCourses } = require("../controllers/courses");

const { update } = require("../controllers/update");
const { courseUpdate } = require("../controllers/courseUpdate");

// USER SIGNUP
router.post("/signup", signup);

// OTP VERIFICATION
router.post("/verfication", verification);

// USER LOGIN
router.post("/login", login);

// CONTACT US
router.post("/contact", contact);

// GET ALL COURSES
router.get("/courses", getAllCourses);

// GET ALL THE DETAILS OF USER (PERSONAL DETAILS, COURSES BOUGHT/COURSES SELLING)
router.get("/userDetails", userDetails);

// UPDATE PERSONAL INFORMATION
router.post("/update", update);

// ADD NEW COURSE
router.post("/addCourse", courseUpdate);

module.exports = router;
