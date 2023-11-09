const express = require("express");
const router = express.Router();

const {
  getAllStreamers,
  addStreamer,
  updateStreamer,
} = require("../../controllers/streamersController");

router.get("/", getAllStreamers);
router.post("/", addStreamer);

router.patch("/", updateStreamer);

module.exports = router;
