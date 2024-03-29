const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Streamer = mongoose.model(
  "streamers",
  new Schema({
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
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
    upvotesList: {
      type: [String],
      required: true,
    },
    downvotesList: {
      type: [String],
      required: true,
    },
  })
);

module.exports = Streamer;
