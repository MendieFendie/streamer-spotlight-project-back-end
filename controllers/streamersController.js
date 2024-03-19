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

const getStreamerById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await getById(id);
    if (!data) {
      return res.status(404).json({ error: "Streamer not found" });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addStreamer = async (req, res) => {
  const { name, avatar, description, platform } = req.body;
  const streamer = {
    name: name,
    avatar: avatar,
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

  try {
    const streamerToEdit = await getById(id);

    if (!streamerToEdit) {
      return res.status(404).json({ error: "Streamer not found" });
    }

    const idUpvoteCheck = streamerToEdit.upvotesList.includes(userId);
    const idDownvoteCheck = streamerToEdit.downvotesList.includes(userId);

    if (action === true) {
      if (!idUpvoteCheck) {
        streamerToEdit.upvotes += 1;
        streamerToEdit.upvotesList.push(userId);

        if (idDownvoteCheck) {
          streamerToEdit.downvotes -= 1;
          streamerToEdit.downvotesList = streamerToEdit.downvotesList.filter(
            (id) => id !== userId
          );
        }
        const result = await upvote(id, streamerToEdit);
        res.json({ message: "Upvoted successfully", data: result });
      } else {
        streamerToEdit.upvotes -= 1;
        streamerToEdit.upvotesList = streamerToEdit.upvotesList.filter(
          (id) => id !== userId
        );

        const result = await upvote(id, streamerToEdit);
        res.json({ message: "Upvote removed successfully", data: result });
      }
    } else {
      if (!idDownvoteCheck) {
        streamerToEdit.downvotes += 1;
        streamerToEdit.downvotesList.push(userId);

        if (idUpvoteCheck) {
          streamerToEdit.upvotes -= 1;
          streamerToEdit.upvotesList = streamerToEdit.upvotesList.filter(
            (id) => id !== userId
          );
        }
        const result = await downvote(id, streamerToEdit);
        res.json({ message: "Downvoted successfully", data: result });
      } else {
        streamerToEdit.downvotes -= 1;
        streamerToEdit.downvotesList = streamerToEdit.downvotesList.filter(
          (id) => id !== userId
        );

        const result = await downvote(id, streamerToEdit);
        res.json({ message: "Downvote removed successfully", data: result });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllStreamers,
  addStreamer,
  updateStreamer,
  getStreamerById,
};
