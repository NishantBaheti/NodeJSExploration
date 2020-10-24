const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Joi = require("joi");
const logger = require("./middleware/logger");
const authenticator = require("./middleware/auth");

//application setting
app.set("view engine", "pug");
app.set("views", "./views");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

//custom middleware
app.use(logger);
app.use(authenticator);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled .");
}

console.log("Application Name :" + config.get("name"));
console.log("Mail server :" + config.get("mail.host"));

const homeRouter = require("./routes/home");
app.use("/", homeRouter);

const coursesRouter = require("./routes/courses");
app.use("/api/courses", coursesRouter);

app.listen(port, () => {
  console.log(`listening to port ${port} ...`);
});
