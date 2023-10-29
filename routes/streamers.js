const express = require("express");
const router = express.Router();

/* GET streamers listing. */
router.get("/", function (req, res, next) {
  res.send({ streamers: [] });
});

module.exports = router;
