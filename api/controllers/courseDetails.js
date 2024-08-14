const Course = require("../models/Course");
const Instructor = require("../models/Instructor");

exports.courseUpdate = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      price,
      category,
      benefits,
      prerequisite,
      time,
      imageUrl,
    } = req.body;

    const user = await Instructor.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    const name = user.firstName + " " + user.lastName;

    const AlreadyPresent = await Course.findOne({ instructor: id, title });
    if (AlreadyPresent) {
      try {
      } catch (e) {}
    }

    const course = await Course.create({
      instructor: id,
      title,
      description,
      price,
      category,
      benefits,
      prerequisite,
      time,
      imageUrl,
      instructorName: name,
    });

    res
      .status(200)
      .json({ success: true, message: "Course created successfully" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the course",
      error: e.message,
    });
  }
};
