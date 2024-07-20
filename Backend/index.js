const express = require("express");
const app = express();
const BasicRouter = require("./routes/BasicRoute");
const AdminRouter = require("./routes/AdminRoute");
const InstructorRouter = require("./routes/InstructorRoute");
const StudentRouter = require("./routes/StudentRoute");
const { connect } = require("./config/database");

require("dotenv").config();
connect();

app.use(express.json());

// routes
app.use("/api/v1", BasicRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/instructor", InstructorRouter);
app.use("/api/v1/student", StudentRouter);

app.listen(3000, () => {
  console.log("Listening");
});
