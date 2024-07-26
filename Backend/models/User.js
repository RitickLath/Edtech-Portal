const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
      default: "Student",
    },

    // otp verification

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
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profiles",
    },
    enrolledCourses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
    coursesSelling: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
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

module.exports = mongoose.model("User", userSchema);
