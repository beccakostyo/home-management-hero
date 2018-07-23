const router = require("express").Router();
const propertyContactsController = require("../../controllers/propertyContactsController");

// Matches with "/api/properties"
router
  .route("/")
  .get(propertyContactsController.findAll)
  .post(propertyContactsController.create);

// Matches with "/api/properties/:id"
router
  .route("/:id")
  .get(propertyContactsController.findById)
  .put(propertyContactsController.update)
  .delete(propertyContactsController.remove);

module.exports = router;
