// import all API routes and package them up
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add `/users` prefix to user-routes.js routes
router.use('/users', userRoutes);

// add `/thoughts` prefix to thought-routes.js routes
router.use('/thoughts', thoughtRoutes);

module.exports = router;