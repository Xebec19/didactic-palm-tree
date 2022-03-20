/**
 * @type : Middleware
 * @desc : catches error, logs it and renders error page
 */
exports.errorCatcher = (err, req, res, next) => {
    logger.error("--error", err);
    res.status(err.status || 500);
    res.render("500", { error: err });
  }