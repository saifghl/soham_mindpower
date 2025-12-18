const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const register = async (req, res) => {
    const { email, password, role, name, age, phone, specialization, experience } = req.body;
    
    try {
        // Check if user exists
        const [existingUser] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const [userResult] = await pool.execute(
            'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
            [email, hashedPassword, role]
        );

        const userId = userResult.insertId;

        // Create role-specific profile
        if (role === 'admin') {
            await pool.execute('INSERT INTO admins (user_id, name) VALUES (?, ?)', [userId, name]);
        } else if (role === 'doctor') {
            await pool.execute(
                'INSERT INTO doctors (user_id, name, specialization, experience) VALUES (?, ?, ?, ?)',
                [userId, name, specialization, experience]
            );
        } else if (role === 'patient') {
            await pool.execute(
                'INSERT INTO patients (user_id, name, age, phone) VALUES (?, ?, ?, ?)',
                [userId, name, age, phone]
            );
        }

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Get user
        const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = users[0];

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };