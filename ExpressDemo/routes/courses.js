const express = require("express");
const router = express.Router();

const courses = [
  {
    id: 1,
    name: "ML",
  },
  {
    id: 2,
    name: "DL",
  },
];

router.get("/", (req, res) => {
  res.send(courses);
});

// endpoint like /api/courses/1
// variable assignment in the URL
router.get("/:id", (req, res) => {
  var course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Given course is not found.");
  } else {
    res.send(course);
  }
});

// router.get("/api/posts/:year/:month", (req, res) => {
//   //   res.send(req.query);
//   res.send(req.params);
// });

router.post("/", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const { result, error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(courses);
});

module.exports = router;
