const express = require("express");
const { categoryValidation } = require("../../validations")
const { categoryController } = require("../../controllers")

const router = express.Router();

/** Create Category */
router.post(
    "/create-category",
    categoryController.createCategory
)

/** get Category list */
router.get(
    "/list",
    categoryController.getCategoryDetails
);

/** Delete Category */
// router.delete(
//     "/delete-category",
//     categoryController.deleteCategory
// )

module.exports = router;