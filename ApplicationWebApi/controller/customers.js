const express = require("express");
const router = express.Router();
const Customer = require("../model/customer")

router.get("/",async (req, res) => {
  try{
    let customers = await Customer.findAll();
    res.status(200).send(customers);
  }
  catch(err){
    res.status(400).send(err);
  }
});

router.get("/:id",async (req, res) => {
  try{
    let customers = await Customer.findAll(
      {
        where:{
          id : req.params.id
        }
      }
    );
    res.status(200).send(customers);
  }
  catch(err){
    res.status(400).send(err);
  }
});


router.post("/",async (req,res) => {
  try{
    let customer = Customer.build({
      name : req.body.name,
      phone : req.body.phone,
      isGold : req.body.isGold
    });
    let result = await customer.save();
    res.status(200).send(result)
  }
  catch(err){
    res.status(400).send(err);
  }
});

router.put("/:id",async (req,res) => {
  try{
    let result = Customer.update({
      name : req.body.name,
      phone : req.body.phone,
      isGold : req.body.isGold
    },{
      where:{
        id : req.params.id
      }
    });
    res.status(200).send(result);
  }
  catch(err){
    res.status(400).send(err);
  }
});


module.exports = router;
