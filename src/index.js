const express = require("express");
const logger = require("./utils/winston.utils");
const morganMiddleware = require("./utils/morgan.utils");
const cors = require("cors");
const path = require("path");
const app = (module.exports = express());
const expressLayouts = require("express-ejs-layouts");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morganMiddleware);
app.use(express.static(path.join(__dirname, "public")));
app.enable("verbose errors");

app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "html");
app.set("layout extractScripts", true);
app.use(expressLayouts);

app.use(function (err, req, res, next) {
  logger.error("--error", err);
  res.status(err.status || 500);
  res.render("500", { error: err });
});
