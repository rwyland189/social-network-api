const router = require('express').Router();

// set up GET all and POST at /api/users
router
    .route('/')
    .get()
    .post();

// set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;