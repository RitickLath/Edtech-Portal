const mongoose = require("mongoose");

const subContentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Subcontent", subContentSchema);
