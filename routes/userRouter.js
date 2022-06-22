const express = require("express");
const controller = require("./../controllers/controllers");
const Router = express.Router();

Router.route("/").post(controller.createUser);
Router.route("/:id")
  .get(controller.getUserById)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

module.exports = Router;
