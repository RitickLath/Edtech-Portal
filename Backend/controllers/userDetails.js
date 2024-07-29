const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const Instructor = require("../models/Instructor");
const Course = require("../models/Course");

exports.userDetails = async (req, res) => {
  try {
    // BASIC AUTHENTICATION
    const authHeader = req.headers.authorization;
    const role = authHeader.split(" ")[2];
    console.log(role + " " + authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    console.log(token);
    let decoded;

    // TOKEN VERIFICATION
    try {
      decoded = jwt.verify(token, process.env.SECRET);
      console.log(decoded);
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token." });
    }

    const user = await (role == "Student" ? Student : Instructor)
      .findById(decoded.userId)
      .lean()
      .select("-password -otp -otpCreatedAt");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // NOW FETCHING THE DATA TO GIVE RESPONSE
    const id = user._id;
    if (role == "Instructor") {
      const courses = await Course.find({ instructor: id });
      res.status(200).json({
        success: true,
        message: "All details of Instructor is provided",
        user,
        courses,
      });
    } else if (role == "Student") {
      const courses = await Course.find({ enrolledUsers: id });
      res.status(200).json({
        success: true,
        message: "All details of Student is provided",
        user,
        courses,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid role provided." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
