const { hotelService } = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;
    const hotel = await hotelService.createHotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Hotel created successfully",
      data: { hotel },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** hotel list */
const getHotelslist = async (req, res) => {
  try {
    const getlist = await hotelService.getHotelslist(req, res);
    if(!getlist){
      throw  new Error('hotel list found')
  }
    res.status(200).json({
      success: true,
      message: "Get Hotel list successfully!",
      data: { getlist },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** delete hotel */
const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    if (!hotelId) {
      throw new Error("Hotel not found !");
    }
    await hotelService.deleteHotel(hotelId);
    res.status(200).json({
      success: true,
      message: "Hotel delete successfuly",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createHotel,
  getHotelslist,
  deleteHotel,
};
