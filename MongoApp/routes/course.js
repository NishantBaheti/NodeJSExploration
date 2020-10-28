const express = require("express");
const router = express.Router();

router.get("/getAllCourses", (req, res) => {
  res.status(200).send("All Courses");
});

router.get("/getCourse/:id", (req, res) => {
  res.status(200).send(req.params.id);
});

module.exports = router;
