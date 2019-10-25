const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Get logged in user
// @access  Private
router.post('/', (req, res) => {
  res.send('Get logged in user');
});

module.exports = router;
