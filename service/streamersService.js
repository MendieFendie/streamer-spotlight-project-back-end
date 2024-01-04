const Streamer = require("./schemas/streamerSchema");

const getAll = () => {
  return Streamer.find();
};

const getById = (id) => {
  return Streamer.find({ _id: id });
};

const add = ({ name, platform, description }) => {
  return Streamer.create({
    name,
    platform,
    description,
    upvotes: 0,
    downvotes: 0,
    upvotesList: [],
    downvotesList: [],
  });
};

const upvote = (id, fields) => {
  return Streamer.findOneAndUpdate({ _id: id }, fields, { new: true });
};

const downvote = (id, fields) => {
  return Streamer.findOneAndUpdate({ _id: id }, fields, { new: true });
};

module.exports = {
  getAll,
  getById,
  add,
  upvote,
  downvote,
};
