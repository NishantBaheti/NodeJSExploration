const express = require("express");
const { findAll } = require("../model/genre");
const router = express.Router();
const Genre = require("../model/genre")

router.get("/", async (req, res) => {
  try{
    let genres = await Genre.findAll();
    res.status(200).send(genres);
  }
  catch(err){
    res.status(400).send(err);
  }
});

router.get("/:id",async (req, res) => {
  try{
    let customers = await Genre.findAll(
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
    let genre = Genre.build({
      name : req.body.name
    })
    let result = await genre.save();
    res.status(200).send(result);
  }
  catch(err){
    res.status(400).send(err);
  }
});

router.put("/:id",async (req,res) => {
  try{
    let result = Genre.update({
      name : req.body.name
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
