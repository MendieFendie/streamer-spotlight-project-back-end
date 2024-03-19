const express = require("express");
const router = express.Router();

const {
  getAllStreamers,
  addStreamer,
  updateStreamer,
  getStreamerById,
} = require("../../controllers/streamersController");

router.get("/", getAllStreamers, getStreamerById);
router.get("/streamers/:id", getStreamerById);
router.post("/", addStreamer);
router.patch("/", updateStreamer);

module.exports = router;
