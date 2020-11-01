const { Sequelize } = require("sequelize")  ;

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


module.exports = sequelize;