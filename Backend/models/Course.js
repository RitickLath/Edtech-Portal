const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: [true, "Instructor is required"],
    },
    title: {
      type: String,
      required: [true, "Course Name is required"],
      //unique: [true, "Course with the same name already exists"],
      maxLength: [100, "Course Name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Must provide course description"],
    },
    price: {
      type: Number,
      required: [true, "Must provide course price"],
    },
    time: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Must provide course category"],
    },
    // thumbnail: {
    //   type: String,
    // },
    benefits: {
      type: String,
      required: [true, "Must provide course benefits"],
    },
    prerequisite: {
      type: [String],
    },
    sections: {
      type: [String],
    },
    courseContent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MainContent",
      },
    ],
    enrolledUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
