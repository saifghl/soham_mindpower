const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { getPatientProfile } = require('../controllers/patientController');

const router = express.Router();

router.get('/profile', authenticateToken, getPatientProfile);

module.exports = router;