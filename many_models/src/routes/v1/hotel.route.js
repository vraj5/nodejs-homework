const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");

const router = express.Router();

/** create hotel */
router.post("/create-hotel", hotelController.createHotel);

/** hotel list */
router.get("/list", hotelController.getHotelslist);

/** delete hotel */
router.delete("/delete-hotel/:hotelId", hotelController.deleteHotel);

module.exports = router;
