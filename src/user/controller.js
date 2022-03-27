const CustomError = require("../utils/customError");
const { sendResponse } = require("../utils/responseHandler.utils");
const logger = require("../utils/winston.utils");

/**
 * @type : Request Controller
 * @method : GET
 * @route : /user/registration
 * @desc : renders registration page
 */
exports.registrationPage = async (req, res, next) => {
  return await sendResponse({ status: true, page: "user/registration", data: null }, res);
};
