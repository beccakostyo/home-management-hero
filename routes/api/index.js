const router = require("express").Router();
const usersRoutes = require('./users');
const propertiesRoutes = require('./properties');
const authRoutes = require('./authRoutes');
const propertyContactsRoutes = require('./propertyContacts');

router.use('/', authRoutes)
router.use('/users', usersRoutes)
router.use('/properties', propertiesRoutes)
router.use('/property-contacts', propertyContactsRoutes)

module.exports = router;
