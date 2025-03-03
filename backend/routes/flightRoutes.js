const express = require('express');
const Flight = require('../models/Flight');

const router = express.Router();

// Get all flights
router.get('/', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;