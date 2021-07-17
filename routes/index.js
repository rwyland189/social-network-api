const router = require('express').Router();

// import API routes from /api/index.js
const apiRoutes = require('./api');

// add `/api` prefix to all `api` directory api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>Oops! 404 Error :(</h1>');
});

module.exports = router;