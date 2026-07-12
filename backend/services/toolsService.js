const { Tool } = require('../models/index');

exports.getAllTools = async () => {
  return await Tool.findAll({ order: [['createdAt', 'DESC']] });
};

exports.createTool = async (data) => {
  return await Tool.create(data);
};