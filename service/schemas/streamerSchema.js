const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streamerSchema = new Schema("streamers", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
  },
  downvotes: {
    type: Number,
    required: true,
  },
});

const Streamer = mongoose.model("streamers", streamerSchema);

module.exports = Streamer;
