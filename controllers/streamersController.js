const Streamer = require("../service/schemas/streamerSchema");
const {
  getAll,
  getById,
  add,
  upvote,
  downvote,
} = require("../service/streamersService");

const getAllStreamers = async (req, res) => {
  try {
    const data = await getAll();
    res.send(data);
  } catch (error) {
    return console.log(error);
  }
};

const addStreamer = async (req, res) => {
  const { name, description, ownerId } = req.body;
  const { _id } = req.user;
  const streamer = {
    name: name,
    description: description,
    upvotes: 0,
    downvotes: 0,
    ownerId: ownerId,
  };
  const data = await add(streamer);
  res.status(201).json(data);
};

const updateStreamer = async (req, res) => {
  const { id, action } = req;

  const contactToEdit = await getById(id);

  if ((action = true)) {
    contactToEdit.upvotes += 1;

    const result = await upvote(id, contactToEdit);
    res.send(result);
  } else {
    contactToEdit.upvotes -= 1;

    const result = await downvote(id, contactToEdit);
    res.send(result);
  }
};

module.exports = {
  getAllStreamers,
  addStreamer,
  updateStreamer,
};
