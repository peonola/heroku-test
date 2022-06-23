const express = require("express");
const bodyParser = require("body-parser");
const messageRouter = require("./routes/messageRouter");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", messageRouter);

module.exports = app;
