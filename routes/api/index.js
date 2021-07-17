// import all API routes and package them up
const router = require('express').Router();
const userRoutes = require('./user-routes');

// add `/users` prefix to user-routes.js routes
router.use('/users', userRoutes);

module.exports = router;