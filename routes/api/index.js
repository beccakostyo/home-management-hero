const router = require("express").Router();
const usersRoutes = require('./users');
const propertiesRoutes = require('./properties');
const authRoutes = require('./authRoutes');

router.use('/', authRoutes)
router.use('/users', usersRoutes)
router.use('/properties', propertiesRoutes)

module.exports = router;
