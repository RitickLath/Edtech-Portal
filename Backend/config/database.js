const mongoose = require("mongoose");

exports.connect = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://ritick943lath:W3aKtysX3OTVHNS0@cluster0.vufpblw.mongodb.net/EdtechPortal"
      )
      .then(() => {
        console.log("MongoDB connected successfullty");
      })
      .catch((e) => {
        console.log("Error Occured while connecting with mongoose");
      });
  } catch (e) {
    console.log("Error while connecting to database");
  }
};
