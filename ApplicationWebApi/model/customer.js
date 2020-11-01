const sequelize = require("../utility/dbConn");
const { Sequelize,DataTypes } = require("sequelize");

const Customer = sequelize.define("Customer",{
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    isGold : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    }
});

module.exports = Customer;
