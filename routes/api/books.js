const router = require("express").Router();
const bookController = require("../../controllers/bookController.js");

// Matches with "/api/posts"
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .delete(bookController.remove);

module.exports = router;