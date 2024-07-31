const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const InstructorSchema = new mongoose.Schema(
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
      unique: true,
      maxLength: [35, "Email cannot exceed 50 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["Student", "Instructor", "Admin"],
      default: "Instructor",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },
    location: {
      type: String,
      trim: true,
      maxLength: [100, "Location cannot exceed 100 characters"],
    },
    DOB: {
      type: String,
    },
    phoneNumber: {
      type: String,
      trim: true,
      maxLength: [20, "Phone number cannot exceed 20 characters"],
    },
    headline: {
      type: String,
      trim: true,
      maxLength: [50, "Headline cannot exceed 50 characters"],
    },
    bio: {
      type: String,
      trim: true,
      maxLength: [2000, "bio cannot exceed 2000 characters"],
    },
    photo: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otpCreatedAt: {
      type: Date,
    },
    otp: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

InstructorSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (e) {
      next(e);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model("Instructor", InstructorSchema);
