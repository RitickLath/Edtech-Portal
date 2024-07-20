const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxLength: [15, "First name cannot exceed 15 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      maxLength: [15, "Last name cannot exceed 15 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email ID already exists"],
      maxLength: [35, "Email cannot exceed 50 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      maxLength: [30, "Password cannot exceed 30 characters"],
    },
    phoneNumber: {
      type: String,
      // required: [true, "Phone number is required"],
      trim: true,
      maxLength: [20, "Phone number cannot exceed 20 characters"],
    },
    role: {
      type: String,
      enum: ["Student", "Instructor", "Admin"],
      default: "Student",
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    coursesSelling: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
