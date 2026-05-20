const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const Task = sequelize.define('Task', {

  title: DataTypes.STRING,

  priority: DataTypes.STRING,

  status: DataTypes.STRING,

  dueDate: DataTypes.STRING

});

module.exports = Task;