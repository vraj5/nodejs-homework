const { category } = require("../models");

// Create Category
// @param {object} reqBody
// @returns {promise<user>}

const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

// Get Category List