const User = require('../models/User');

// @route   POST api/rewards/claim
// @desc    Claim rewards for a user
// @access  Private
exports.claimRewards = async (req, res) => {
  try {
    const { reward } = req.body;
    const userId = req.user.id; // Assuming authentication middleware sets req.user

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.totalPoints += reward;
    await user.save();

    res.json({ message: 'Rewards claimed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};