const { musicService } = require("../services");

const createMusic = async (req, res) => {
  try {
    const reqBody = req.body;
    const music = await musicService.createMusic(reqBody)
    if (!music) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Successfully created a new music",
      data: { music },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMusicList = async (req, res) => {
  try {
    const getList = await musicService.getMusicList(req, res);
    if (!getList) {
      throw new Error("music list found");
    }
    res.status(200).json({
      success: true,
      message: "Get music list successfully!",
      data: { getList },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteMusicById = async (req, res) => {
  try {
    const musicId = req.params.musicId;
    if (!musicId) {
      throw new Error("music not found !");
    }
    await musicService.deleteMusicById(musicId)
    res.status(200).json({
        success: true,
        message: "music delete successfully!",
      });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

module.exports = {
    createMusic,
    getMusicList,
    deleteMusicById
};
