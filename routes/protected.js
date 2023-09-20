const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUser');

router.get('/', authenticateUser, (req, res) => {
  res.json({ message: 'This is a protected route.' });
});

module.exports = router;
