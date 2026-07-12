const toolService = require('../services/toolsService');

exports.getTools = async (req, res) => {
  try {
    const tools = await toolService.getAllTools();
    res.json(tools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTool = async (req, res) => {
  try {
    const newTool = await toolService.createTool(req.body);
    res.status(201).json(newTool);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};