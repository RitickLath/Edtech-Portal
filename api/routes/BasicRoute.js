const express = require("express");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { contact } = require("../controllers/contact");
const { verification } = require("../controllers/verification");
const { userDetails } = require("../controllers/userDetails");
const router = express.Router();

const { update } = require("../controllers/update");
const { courseUpdate } = require("../controllers/courseDetails");
const { getAllCourses } = require("../controllers/getAllcourses");
const Instructor = require("../models/Instructor");
const Course = require("../models/Course");

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

router.post("/addLectures", async (req, res) => {
  try {
    const { id, title, lecture } = req.body;

    console.log(id, title, lecture);

    const user = await Instructor.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    const course = await Course.findOne({ instructor: id, title });
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course Not Found" });
    }

    // If you want to replace the lecture array:
    await Course.updateOne({ _id: course._id }, { $set: { lecture: lecture } });

    return res.status(200).json({ success: true, message: "Lecture Added" });
  } catch (e) {
    console.error(e); // For debugging purposes, you can log the error
    return res.status(500).json({
      success: false,
      message: "Error occurred while adding lecture",
      error: e.message, // Send only the error message
    });
  }
});

module.exports = router;
