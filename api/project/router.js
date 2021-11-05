// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const projects = await Projects.createProject(req.body);
    res.status(201).json(projects);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
