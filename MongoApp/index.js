const express = require("express");
const Logger = require("./middleware/logger");
const log = new Logger().log;
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB..");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB");
  });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const courseObj = new Course({
    name: "DL",
    author: "Nishant",
    tags: ["AI", "Python"],
    isPublished: true,
  });

  const result = await courseObj.save();
  console.log(result);
}

// createCourse();

async function getCourses(filter) {
  const courses = await Course.find(filter);
  console.log(courses);
}

async function getCoursesWithLimit(filter, limit) {
  const courses = await Course.find(filter).limit(limit).sort({ name: 1 });
  console.log(courses);
}
// getCourses({});
// getCourses({
//   author: "Nishant",
//   isPublished: true,
// });

// getCoursesWithLimit({}, null);
// getCoursesWithLimit({}, 1);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(log);

// const homeRouter = require("./routes/home");
// app.use("/", homeRouter);

// app.listen(port, () => {
//   console.log("App is listening to port :", port);
// });
