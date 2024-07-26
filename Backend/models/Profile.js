const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    // Basic details
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
      type: Date,
    },
    phoneNumber: {
      type: String,
      // required: [true, "Phone number is required"],
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
      maxLength: [200, "bio cannot exceed 200 characters"],
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
