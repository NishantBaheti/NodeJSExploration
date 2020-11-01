const express = require("express");
const router = express.Router();
const port = process.env.PORT || 3000;
const app = express();
const sequelize = require("./utility/dbConn");

sequelize.sync({ force : false }).then(() => {
  console.log("Synchronized successfully");
})
.catch((err) => {
console.log("error in synchronization. ERROR :",err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRouter = require("./controller/home");
app.use("/", homeRouter);

const genreRouter = require("./controller/genres");
app.use("/api/genre", genreRouter);

const customerRouter = require("./controller/customers");
app.use("/api/customer", customerRouter);

app.listen(port, () => {
  console.log("App is listening to port :", port);
});
