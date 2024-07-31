const Instructor = require("../models/Instructor");
const Student = require("../models/Student");

exports.update = async (req, res) => {
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
      role,
    } = req.body;

    const user = await (role === "Student" ? Student : Instructor).findOne({
      email,
    });

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
};
