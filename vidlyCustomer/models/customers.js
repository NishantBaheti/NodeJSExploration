const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    isGold: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 20,
    },
  })
);

module.exports = Customer;
