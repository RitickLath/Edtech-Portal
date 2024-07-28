const bcrypt = require("bcrypt");
const Student = require("../models/Student");
const Instructor = require("../models/Instructor");

exports.verification = async (req, res) => {
  try {
    const { id, otp, role } = req.body;

    // CHECK IF OTP, ID AND ROLE ARE PROVIDED
    if (!otp || !id || !role) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (id, otp, role).",
      });
    }

    // CHECK IF FULL LENGTH OF OTP IS PROVIDED
    if (otp.length !== 6) {
      return res.status(400).json({
        success: false,
        message: "Please enter the full 6-digit OTP.",
      });
    }

    // FIND USER BASED ON ROLE
    const user = await (role === "Student" ? Student : Instructor).findById(id);

    // CHECK IF USER EXISTS
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // VERIFY OTP
    const isOtpValid = await bcrypt.compare(otp, user.otp);
    if (!isOtpValid) {
      return res.status(400).json({
        success: false,
        message: "Incorrect OTP.",
      });
    }

    // OTP EXPIRE TIME IS 5 MINUTE
    const otpExpiryTime = 5 * 60 * 1000;

    // IF OTP IS ENTERED AFTER 5 MINUTES
    if (Date.now() - user.otpCreatedAt > otpExpiryTime) {
      await (role === "Student" ? Student : Instructor).findByIdAndDelete(id);
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please sign up again.",
      });
    }

    // MARK USER AS VERIFIED AND CLEAR OTP AND TIMING
    user.isVerified = true;
    user.otp = undefined;
    user.otpCreatedAt = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "User verified successfully.",
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: `Error occurred: ${e.message}`,
    });
  }
};
