const express = require("express");
const router = express.Router();
const port = process.env.PORT || 3000;
const app = express();

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/database/appdevdb.sqlite",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("sqlitedb connected successfully.");
  })
  .catch((err) => {
    console.log("Couldn't connect to sqlitedb. ERROR :", err);
  });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const homeRouter = require("./controller/home");
// app.use("/", homeRouter);

// const genreRouter = require("./controller/genres");
// app.use("/api/genres", genreRouter);

// const customerRouter = require("./controller/customers");
// app.use("/api/customers", customerRouter);

// app.listen(port, () => {
//   console.log("App is listening to port :", port);
// });
