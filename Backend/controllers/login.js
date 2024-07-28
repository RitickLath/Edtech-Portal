const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if there is a user with the provided email
    const userDetail = await User.findOne({ email });

    if (!userDetail) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Verify password
    const passwordVerify = await bcrypt.compare(password, userDetail.password);

    if (!passwordVerify) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const userId = userDetail._id;

    const payload = { userId };
    req.userId = userId;
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      role: userDetail.role,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while logging in the user",
    });
  }
};
