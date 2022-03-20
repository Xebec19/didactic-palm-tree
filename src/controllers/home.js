const { sar } = require("../utils/responseHandler.utils");
const logger = require("../utils/winston.utils");

/**
 * @type : Request Controller
 * @method : GET
 * @route : /public/home
 * @desc : renders home page
 */
exports.homePage = async (req, res, next) => {
    // sar(true,'home',null);
    return res.render('home');
};
