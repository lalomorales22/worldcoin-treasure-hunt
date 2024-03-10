const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/rewardController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have an authentication middleware

// @route   POST api/rewards/claim
// @desc    Claim rewards for a user
// @access  Private
router.post('/claim', authMiddleware, rewardController.claimRewards);

module.exports = router;