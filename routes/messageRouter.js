const express = require("express");
const controller = require("./../controllers/controllers");
const Router = express.Router();

Router.route("/").get(controller.renderHTML).post(controller.writeMessageDb);

module.exports = Router;
