const pool = require('../config/db');

const getPatientProfile = async (req, res) => {
    try {
        const [patients] = await pool.execute(
            'SELECT p.*, u.email FROM patients p JOIN users u ON p.user_id = u.id WHERE u.id = ?',
            [req.user.userId]
        );
        
        if (patients.length === 0) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        
        res.json(patients[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPatientProfile };