const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router
  .route("/create")
  .get(controller.readCreatePage)
  .post(controller.writeMessageDb);

router
  .route("/update/:id")
  .get(controller.readMsgToUpdate)
  .post(controller.updateMessage);

router.get("/", controller.getMessages);
router.get("/:id", controller.getMessageById);
router.get("/delete/:id", controller.deleteMessage);

module.exports = router;
