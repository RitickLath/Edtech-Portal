const mongoose = require("mongoose");

exports.connect = () => {
  try {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((e) => {
        console.log("Error Occured while connecting with mongoose");
      });
  } catch (e) {
    console.log("Error while connecting to database");
  }
};
