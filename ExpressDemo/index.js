const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

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

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// endpoint like /api/courses/1
// variable assignment in the URL
app.get("/api/courses/:id", (req, res) => {
  var course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Given course is not found.");
  } else {
    res.send(course);
  }
});

app.get("/api/posts/:year/:month", (req, res) => {
  //   res.send(req.query);
  res.send(req.params);
});

app.listen(port, () => {
  it;
  console.log(`listening to port ${port} ...`);
});
