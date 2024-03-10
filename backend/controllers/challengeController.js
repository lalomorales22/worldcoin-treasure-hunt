const Challenge = require('../models/Challenge');

// @route   POST api/challenges
// @desc    Create a new challenge
// @access  Private
exports.createChallenge = async (req, res) => {
  try {
    const { title, description, reward } = req.body;
    const createdBy = req.user.id; // Assuming authentication middleware sets req.user

    const challenge = new Challenge({
      title,
      description,
      reward,
      createdBy,
    });

    await challenge.save();

    res.status(201).json({ message: 'Challenge created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @route   GET api/challenges
// @desc    Get all challenges
// @access  Public
exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @route   GET api/challenges/:id
// @desc    Get a single challenge by ID
// @access  Public
exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    res.json(challenge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @route   PUT api/challenges/:id
// @desc    Update a challenge
// @access  Private
exports.updateChallenge = async (req, res) => {
  try {
    const { title, description, reward } = req.body;
    const userId = req.user.id; // Assuming authentication middleware sets req.user

    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    if (challenge.createdBy.toString() !== userId) {
      return res.status(403).json({ error: 'Not authorized to update this challenge' });
    }

    challenge.title = title;
    challenge.description = description;
    challenge.reward = reward;

    await challenge.save();

    res.json({ message: 'Challenge updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @route   DELETE api/challenges/:id
// @desc    Delete a challenge
// @access  Private
exports.deleteChallenge = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming authentication middleware sets req.user

    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    if (challenge.createdBy.toString() !== userId) {
      return res.status(403).json({ error: 'Not authorized to delete this challenge' });
    }

    await challenge.remove();

    res.json({ message: 'Challenge deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @route   POST api/challenges/:id/submit
// @desc    Submit a challenge solution
// @access  Private
exports.submitChallengeSolution = async (req, res) => {
  try {
    const { solution } = req.body;
    const userId = req.user.id; // Assuming authentication middleware sets req.user

    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    // TODO: Validate the submitted solution and update user progress

    res.json({ message: 'Challenge solution submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};