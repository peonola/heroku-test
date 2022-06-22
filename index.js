const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controllers/controllers");
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

app.get("/", controller.getMessages);
app.get("/create", controller.readCreatePage);
app.post("/create", controller.writeMessageDb);
app.get("/:id", controller.getMessageById);
app.get("/update/:id", controller.readMsgToUpdate);
app.post("/update/:id", controller.updateMessage);
app.get("/delete/:id", controller.deleteMessage);

module.exports = app;
