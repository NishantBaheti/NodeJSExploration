const sequelize = require("../utility/dbConn");
const { Sequelize,DataTypes } = require("sequelize");


const Genre = sequelize.define("Genre",{
    name:{
        type : DataTypes.STRING,
        allowNull : false
    }
});


module.exports = Genre;