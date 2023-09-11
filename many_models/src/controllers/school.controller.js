const { schoolService } = require("../services");

const createSchool = async (req, res) => {
  try {
    const reqBody = req.body;
    const school = await schoolService.createSchool(reqBody)
    if (!school) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Successfully created a new School",
      data: { school },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getSchoolList = async (req, res) => {
  try {
    const getList = await schoolService.getSchoolList(req, res);
    if (!getList) {
      throw new Error("school list found");
    }
    res.status(200).json({
      success: true,
      message: "Get school list successfully!",
      data: { getList },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const schoolId = req.params.schoolId;
    if (!schoolId) {
      throw new Error("school not found !");
    }
    await schoolService.deleteSchool(schoolId)
    res.status(200).json({
        success: true,
        message: "school delete successfully!",
      });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

module.exports = {
  createSchool,
  getSchoolList,
  deleteSchool
};
