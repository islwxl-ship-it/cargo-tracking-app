const express = require('express');
const router = express.Router();

// Mock database for demonstration purposes
let users = [];

// Register endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Perform validation and add user to the "database"
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validate user credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Password recovery endpoint
router.post('/password-recovery', (req, res) => {
    const { email } = req.body;
    // Logic for password recovery (e.g., send recovery email)
    res.status(200).json({ message: 'Password recovery email sent' });
});

module.exports = router;