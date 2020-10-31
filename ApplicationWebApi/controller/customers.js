const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("All customers");
});

module.exports = router;
