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
  price: { type: Number, default: 10 },
});

const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const courseObj = new Course({
    name: "ML+DL",
    author: "Nishant",
    tags: ["AI", "Python"],
    isPublished: true,
    price: 35,
  });

  const result = await courseObj.save();
  console.log(result);
}

// createCourse();

// mongoose filer keywords
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greate than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)

async function getCourses(filter) {
  const courses = await Course.find(filter);
  console.log(courses);
}

// with limit and sort
async function getCoursesWithLimit(filter, limit) {
  const courses = await Course.find(filter).limit(limit).sort({ name: 1 });
  console.log(courses);
}

// comparison operators
async function getCourseswithFilter1() {
  const courses = await Course.find({ price: { $gte: 10, $lte: 30 } })
    .limit(10)
    .sort({ name: 1 });

  console.log(courses);
}

// comparison operators
async function getCourseswithFilter2() {
  const courses = await Course.find({ price: { $in: [10, 20, 30] } })
    .limit(10)
    .sort({ name: 1 });

  console.log(courses);
}

// logical operators
async function getCourseswithFilter3() {
  const courses = await Course.find()
    .or([{ author: "Nishant" }, { isPublished: true }])
    .and([{ name: "DL" }, { price: 10 }])
    .limit(10)
    .sort({ name: 1 });

  console.log(courses);
}

// regex
async function getCourseswithFilter4() {
  const courses = await Course
    // starts with
    // .find({ author: /^Nish/ })

    // ends with
    // .find({ author: /ant$/ })

    // contains
    .find({ author: /.*shan.*/ })

    .limit(10)
    .sort({ name: 1 });

  console.log(courses);
}

// count
async function getCourseswithFilter5() {
  const courses = await Course.find()
    .or([{ author: "Nishant" }, { isPublished: true }])
    .and([{ name: "DL" }, { price: 10 }])
    .limit(10)
    .sort({ name: 1 })
    .count();

  console.log(courses);
}

//pagination
async function getCourseswithFilter6() {
  const pageNumber = 1;
  const pageSize = 10;

  const courses = await Course.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
}

// getCourses({});
// getCourses({ author: "Nishant", isPublished: true });

// getCoursesWithLimit({}, null);
// getCoursesWithLimit({}, 1);

// getCourseswithFilter1();
// getCourseswithFilter2();
// getCourseswithFilter3();
// getCourseswithFilter4();
// getCourseswithFilter5();
// getCourseswithFilter6();
