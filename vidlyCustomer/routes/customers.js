const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Customer = require("../models/customers");

router.get("/", async (req, res) => {
  let customers = await Customer.find().sort("name");

  res.status(200).send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validateCustomers(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    isGold: req.body.isGold,
    name: req.body.name,
    phone: req.body.phone,
  });

  let result = await customer.save();

  res.status(200).send(result);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res.status(400).send("Customer with this id is not available");

  res.status(200).send(customer);
});

router.put("/:id", async (req, res) => {
  const { error } = validateCustomers(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone,
      },
    },
    {
      new: true,
    }
  );

  if (!customer)
    return res.status(404).send("Customer with the given ID was not found.");

  res.send(customer);
});

router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(customer);
});

function validateCustomers(customer) {
  const schema = {
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(10).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}

module.exports = router;
