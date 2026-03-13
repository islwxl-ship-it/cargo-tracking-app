'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample endpoint for tracking cargo
app.get('/api/cargo/:id', (req, res) => {
    const cargoId = req.params.id;
    // Logic to track cargo by ID would go here
    res.json({ message: `Tracking cargo with ID: ${cargoId}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
