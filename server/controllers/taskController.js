const Task = require('../models/Task');

exports.createTask = async (req, res) => {

  const task = await Task.create(req.body);

  res.json(task);
};

exports.getTasks = async (req, res) => {

  const tasks = await Task.findAll();

  res.json(tasks);
};

exports.updateTask = async (req, res) => {

  const task = await Task.findByPk(req.params.id);

  await task.update(req.body);

  res.json(task);
};

exports.deleteTask = async (req, res) => {

  const task = await Task.findByPk(req.params.id);

  await task.destroy();

  res.json({
    message: 'Deleted'
  });
};