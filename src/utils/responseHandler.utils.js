/**
 * @type : Utility
 * @desc : handles response to be send for a request
 * @req : { status:boolean, page:string, data:any },res:Response
 */
exports.sendResponse = async (payload, res) => {
  const { status, page, data } = payload;
  if (status) {
    if (page) {
      return res.render(`${page}`, data);
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
      data,
    });
  }
};
