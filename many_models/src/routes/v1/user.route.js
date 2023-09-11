const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  // validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  // validate(userValidation.getUserList),
  userController.getUserList
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  // validate(userValidation.getDetails),
  userController.deleteUser
);
module.exports = router;