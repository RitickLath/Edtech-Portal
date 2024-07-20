const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.authentication = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // token must starts with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }

    // getting the part of auth header after "Bearer "
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token." });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while authenticating the user.",
    });
  }
};
