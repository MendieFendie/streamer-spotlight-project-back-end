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
  const { name, description, platform } = req.body;
  const streamer = {
    name: name,
    platform: platform,
    description: description,
    upvotes: 0,
    downvotes: 0,
    upvotesList: [],
    downvotesList: [],
  };
  try {
    const data = await add(streamer);
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.send(500);
  }
};

const updateStreamer = async (req, res) => {
  const { id, action, userId } = req.body;

  const contactToEdit = await getById(id);

  console.log(contactToEdit);

  if (action === true && contactToEdit !== userId) {
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
