import express from 'express';

const router = express.Router();

// Example route for user registration
router.post('/register', (req, res) => {
    res.json({ message: 'User registered successfully!' });
});