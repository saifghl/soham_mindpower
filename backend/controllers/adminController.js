const pool = require('../config/db');

const getAdminProfile = async (req, res) => {
    try {
        const [admins] = await pool.execute(
            'SELECT a.*, u.email FROM admins a JOIN users u ON a.user_id = u.id WHERE u.id = ?',
            [req.user.userId]
        );
        
        if (admins.length === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        
        res.json(admins[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAdminProfile };