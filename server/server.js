const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middleware FIRST
app.use(cors());
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
