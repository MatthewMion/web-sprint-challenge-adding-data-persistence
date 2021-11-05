// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const Resources = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.getResources();
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resources = await Resources.createResource(req.body);
    res.status(201).json(resources);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
