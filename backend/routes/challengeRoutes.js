const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/challenges
// @desc    Create a new challenge
// @access  Private
router.post('/', authMiddleware, challengeController.createChallenge);

// @route   GET api/challenges
// @desc    Get all challenges
// @access  Public
router.get('/', challengeController.getAllChallenges);

// @route   GET api/challenges/:id
// @desc    Get a single challenge by ID
// @access  Public
router.get('/:id', challengeController.getChallengeById);

// @route   PUT api/challenges/:id
// @desc    Update a challenge
// @access  Private
router.put('/:id', authMiddleware, challengeController.updateChallenge);

// @route   DELETE api/challenges/:id
// @desc    Delete a challenge
// @access  Private
router.delete('/:id', authMiddleware, challengeController.deleteChallenge);

// @route   POST api/challenges/:id/submit
// @desc    Submit a challenge solution
// @access  Private
router.post('/:id/submit', authMiddleware, challengeController.submitChallengeSolution);

module.exports = router;