const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts get all thoughts and create a new thought
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/<thoughtId> get, update, and delete a single thought
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);
    

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').

module.exports = router;