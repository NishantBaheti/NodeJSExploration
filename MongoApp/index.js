const express = require("express");
const Logger = require("./middleware/logger");
const log = new Logger().log;
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(log);

// home route
const homeRouter = require("./routes/home");
app.use("/", homeRouter);

// course route
const courseRouter = require("./routes/course");
app.use("/api/courses", courseRouter);

// listen
app.listen(port, () => {
  console.log("App is listening to port :", port);
});
