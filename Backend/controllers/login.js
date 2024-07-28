const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Student = require("../models/Student");
const Instructor = require("../models/Instructor");

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate required fields
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (Email, Password, Role)",
      });
    }

    // Find user by role and email
    const userDetail = await (role === "Student"
      ? Student
      : Instructor
    ).findOne({ email });

    // Check if user exists
    if (!userDetail) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, userDetail.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT token
    const payload = { userId: userDetail._id };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "30d" });

    // Respond with success
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      role: userDetail.role,
      id: userDetail._id,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while logging in the user",
    });
  }
};
