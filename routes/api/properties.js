const router = require("express").Router();
const propertiesController = require("../../controllers/propertiesController");

// Matches with "/api/books"
router.route("/")
  .get(propertiesController.findAll)
  .post(propertiesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(propertiesController.findById)
  .put(propertiesController.update)
  .delete(propertiesController.remove);

module.exports = router;
