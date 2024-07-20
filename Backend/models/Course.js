const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Instructor is required"],
    },
    courseName: {
      type: String,
      required: [true, "Course Name is must"],
      unique: [true, "Course with same name already exixts"],
      maxLength: [100, "Course Name cannot exceeds 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Must provide course price"],
    },
    description: {
      type: String,
      required: [true, "Must provide course description"],
    },
    coursePic: {
      type: String,
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
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
