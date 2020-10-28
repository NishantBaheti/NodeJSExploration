const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB . . .");
  })
  .catch((err) => {
    console.log("Couldn't connect to MongoDB . . .");
  });

// built in validators
// custom validators
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    // built in
    required: true,
    minlength: 5,
    maxlength: 255,
    //   match : /pattern/
  },
  author: String,
  //   tags: [String],
  tags: {
    type: [String],
    // custom
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "Alleast One tag is required",
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("course", courseSchema);

async function createCourse(data) {
  var courseObj = new Course(data);

  try {
    const result = await courseObj.save();
    console.log(result);
  } catch (err) {
    console.log("ERROR :", err);
  }
}

createCourse({
  name: "Devops-Full",
  author: "Nishant",
  tags: [],
  isPublished: true,
  price: 35,
});
