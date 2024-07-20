const mongoose = require("mongoose");

const mainContentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  subContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubContent",
    },
  ],
});

module.exports = mongoose.model("MainContent", mainContentSchema);
