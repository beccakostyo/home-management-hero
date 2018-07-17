const router = require("express").Router();
const usersRoutes = require('./users');
const propertiesRoutes = require('./properties');

router.use('/users', usersRoutes)
router.use('/properties', propertiesRoutes)

module.exports = router;
