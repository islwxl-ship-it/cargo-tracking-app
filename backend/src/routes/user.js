const express = require('express');
const router = express.Router();

// Dummy data for user profiles
let userProfiles = {
    '1': { id: 1, name: 'John Doe', email: 'john@example.com' },
    '2': { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
};

// Get user profile by ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const userProfile = userProfiles[userId];
    if (userProfile) {
        res.json(userProfile);
    } else {
        res.status(404).send('User not found');
    }
});

// Create or update user profile
router.post('/', (req, res) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).send('ID, name, and email are required');
    }
    userProfiles[id] = { id, name, email };
    res.json(userProfiles[id]);
});

// Delete user profile
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    if (userProfiles[userId]) {
        delete userProfiles[userId];
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;