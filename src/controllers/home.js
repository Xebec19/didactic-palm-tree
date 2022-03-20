const { sendResponse } = require("../utils/responseHandler.utils");
const logger = require("../utils/winston.utils");

/**
 * @type : Request Controller
 * @method : GET
 * @route : /public/home
 * @desc : renders home page
 */
exports.homePage = async (req, res, next) => {
  return await sendResponse({ status: true, page: "home", data: null }, res);
};
