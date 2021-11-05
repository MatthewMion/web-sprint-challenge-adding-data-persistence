// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const Tasks = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.createTask(req.body);
    res.status(201).json(tasks);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
