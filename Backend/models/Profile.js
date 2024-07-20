const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
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

    // little complex
    socialLinks: {
      github: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?(www\.)?github\.com\/.+$/.test(v); // regex from google
          },
          message: (props) => `${props.value} is not a valid GitHub URL!`,
        },
      },

      twitter: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?(www\.)?twitter\.com\/.+$/.test(v);
          },
          message: (props) => `${props.value} is not a valid Twitter URL!`,
        },
      },

      linkedin: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/.test(v);
          },
          message: (props) => `${props.value} is not a valid LinkedIn URL!`,
        },
      },
    },
    location: {
      type: String,
      trim: true,
      maxLength: [100, "Location cannot exceed 100 characters"],
    },
    website: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?[\w\-\.]+\.\w{2,3}(\/\S*)?$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
