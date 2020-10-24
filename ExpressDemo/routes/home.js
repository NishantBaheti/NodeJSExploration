const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Express Demo App",
    message: "Hello World !!",
  });
});

module.exports = router;
