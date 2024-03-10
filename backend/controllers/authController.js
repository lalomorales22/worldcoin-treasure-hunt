const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    const { username, email, worldcoinId } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ $or: [{ username }, { email }, { worldcoinId }] });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user
    user = new User({
      username,
      email,
      worldcoinId,
    });

    // Save the user to the database
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d', // Token expires in 1 day
    });

    res.status(201).json({ token, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};