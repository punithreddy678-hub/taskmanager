const express = require("express");
const router = express.Router();

let tasks = [];
let id = 1;

// CREATE
router.post("/", (req, res) => {
  const task = { id: id++, ...req.body };
  tasks.push(task);
  res.json(task);
});

// READ
router.get("/", (req, res) => {
  res.json(tasks);
});

// UPDATE
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.status = req.body.status;
  }
  res.json(task);
});

// DELETE
router.delete("/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
