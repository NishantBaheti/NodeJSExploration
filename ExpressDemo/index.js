const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Joi = require("joi");
const logger = require("./middleware/logger");
const authenticator = require("./middleware/auth");
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

//application setting
app.set("view engine", "pug");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

console.log("Application Name :" + config.get("name"));
console.log("Mail server :" + config.get("mail.host"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled .");
}

//custom middleware
app.use(logger);
app.use(authenticator);

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

app.post("/api/courses", (req, res) => {
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

app.listen(port, () => {
  console.log(`listening to port ${port} ...`);
});
