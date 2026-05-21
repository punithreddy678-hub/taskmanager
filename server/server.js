require("dotenv").config();

const express = require("express");
const cors = require("cors");

const taskRoutes =
require("./routes/taskRoutes");

const aiRoutes =
require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use("/api/ai", aiRoutes);

app.listen(5000, () => {
  console.log("Server running");
});