const express = require("express");
const router = express.Router();
const toolController = require("../controllers/toolsController");
const { Tool } = require("../models");

router.get("/", toolController.getTools);
router.post("/", toolController.addTool); // Admin assistant uses this
// routes/toolRoutes.js
router.get("/:slug", async (req, res) => {
  const tool = await Tool.findOne({ where: { slug: req.params.slug } });
  if (!tool) return res.status(404).json({ message: "Tool not found" });
  res.json(tool);
});
module.exports = router;
