const methodNotAllowed = require("../errors/notFound");
const router = require("express").Router();
const controller = require("./reservations.controller");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:reservation_Id/status")
  .put(controller.updateStatus)
  .all(methodNotAllowed);

router
  .route("/:reservation_Id")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

module.exports = router;
