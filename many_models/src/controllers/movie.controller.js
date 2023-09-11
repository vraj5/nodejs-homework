const { movieService } = require("../services");

const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;
    const movie = await movieService.createMovie(reqBody)
    if (!movie) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Successfully created a new movie",
      data: { movie },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getMovieList = async (req, res) => {
  try {
    const getList = await movieService.getMovieList(req, res);
    if (!getList) {
      throw new Error("movie list found");
    }
    res.status(200).json({
      success: true,
      message: "Get movie list successfully!",
      data: { getList },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteMovieById = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    if (!movieId) {
      throw new Error("movie not found !");
    }
    await movieService.deleteMovieById(movieId)
    res.status(200).json({
        success: true,
        message: "movie delete successfully!",
      });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

module.exports = {
    createMovie,
    getMovieList,
    deleteMovieById
};
