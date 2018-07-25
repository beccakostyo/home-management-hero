const router           = require('express').Router(),
      usersRoutes      = require('./users'),
      propertiesRoutes = require('./properties');

router.use('/users', usersRoutes)
router.use('/properties', propertiesRoutes)

module.exports = router;
