const express = require("express");
const app = express();
const BasicRouter = require("./routes/BasicRoute");

const { connect } = require("./config/database");
const cors = require("cors");

require("dotenv").config();
connect();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1", BasicRouter);

module.exports = app;
// app.listen(3000, () => {
//   console.log("Listening");
// });
