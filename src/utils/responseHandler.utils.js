/**
 * @type : Utility
 * @desc : handles response to be send for a request
 */
exports.sar = (req, res, next) => (status, page, data) => {
  if (status) {
    if (page) {
      return res.render(`${page}`);
    } else if (data) {
      return res
        .status(201)
        .json({
          message: "Success",
          data,
        })
        .end();
    }
  } else {
    return res.status(401).json({
      message: "Fail",
      data: null,
    });
  }
};
