const express = require("express");
const morganMiddleware = require("./utils/morgan.middleware");
const cors = require("cors");
const path = require("path");
const app = (module.exports = express());
const expressLayouts = require("express-ejs-layouts");
const { addGlobals } = require("./utils/globalVars.middleware");
const { errorCatcher } = require("./utils/errorCatcher.middleware");

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
app.use(addGlobals);
app.set('layout', 'layouts/layout');

app.get('/',(req,res,next) => {
  res.redirect('/home');
});

app.use("/home", require("./home/router"));

app.use(errorCatcher);
