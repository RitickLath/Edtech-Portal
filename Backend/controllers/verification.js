const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.verification = async (req, res) => {
  try {
    // fetch otp
    const { otp } = req.body;
    // if otp on provided by user
    if (!otp) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter the OTP." });
    }

    // if full length otp is not provided
    if (otp.length !== 6) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter the full OTP." });
    }

    const user = await User.findById(req.userId);
    // if no user exixts as such
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found." });
    }

    // verify otp
    const isOtpValid = await bcrypt.compare(otp, user.otp);

    // if invalid otp
    if (!isOtpValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect OTP." });
    }

    // expire time of otp 5 min
    const otpExpiryTime = 5 * 60 * 1000;
    console.log(user.otpCreatedAt);
    // if otp is entered after 5 minutes
    if (Date.now() - user.otpCreatedAt > otpExpiryTime) {
      await User.findByIdAndDelete(req.userId);
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please sign up again.",
      });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpCreatedAt = undefined;
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "User verified successfully." });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ success: false, message: `Error occurred: ${e.message}` });
  }
};
