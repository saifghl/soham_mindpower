const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { getAdminProfile } = require('../controllers/adminController');

const router = express.Router();

router.get('/profile', authenticateToken, getAdminProfile);

module.exports = router;