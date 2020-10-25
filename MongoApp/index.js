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

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(log);

// const homeRouter = require("./routes/home");
// app.use("/", homeRouter);

// app.listen(port, () => {
//   console.log("App is listening to port :", port);
// });
