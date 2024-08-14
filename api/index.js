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

// Default to port 3000 if PORT is not set
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// const express = require("express");
// const app = express();
// const BasicRouter = require("./routes/BasicRoute");
// const { connect } = require("./config/database");
// const cors = require("cors");

// require("dotenv").config();
// connect();
// app.use(cors());
// app.use(express.json());

// // routes
// app.use("/api/v1", BasicRouter);

// module.exports = app;
