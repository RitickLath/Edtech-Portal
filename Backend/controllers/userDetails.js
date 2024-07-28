const User = require("../models/User");

exports.userDetails = async (req, res) => {
  if (!req.userId) {
    return res
      .status(400)
      .json({ success: false, message: "UserId Not Provided" });
  }
  try {
    const user = await User.findById(req.userId)
      .lean()
      .select("-password")
      .select("-otp")
      .select("-otpCreatedAt");

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid User Id" });
    }
    console.log(user);
    return res
      .status(200)
      .json({ success: true, message: "Got User Details", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
