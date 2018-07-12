const router = require("express").Router();
const usersRoutes = require('./users');

router.use('/user', usersRoutes)

module.exports = router;
