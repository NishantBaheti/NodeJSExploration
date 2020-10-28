const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Mongo Database connected Successfully.");
  })
  .catch((err) => {
    console.log("ERROR : connecting to Mongo Database ", err);
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

async function udpateCourse(id) {
  //   // 1. Query first
  //   // findById()
  //   // modify its properties
  //   // save

  //   const course = await Course.findById(id);
  //   if (!course) {
  //     console.log("No courses found");
  //     return;
  //   }
  //   course.isPublished = false;
  //   course.author = "NishantBaheti";

  //   const result = await course.save();
  //   console.log(result);

  //   // 2. Update first
  //   // update directly
  //   // optionally : get return number of record's and info
  //   const result = await Course.update(
  //     { _id: id },
  //     {
  //       $set: {
  //         author: "Nishant",
  //         isPublished: true,
  //       },
  //     }
  //   );
  //   console.log(result);

  //3. find by id and update
  // return will be original doc before udpate without second param
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Nishant",
        isPublished: true,
      },
    },
    {
      new: true,
    }
  );
  console.log(course);
}

// udpateCourse("5f98363ef31fdd4ce34db4b9");

async function removeCourse(id) {
  //   const result = await Course.deleteMany({ _id: id });
  //   console.log(result);
  const course = await Course.findByIdAndDelete(id);
  console.log(course);
}

// removeCourse("5f98363ef31fdd4ce34db4b9");
