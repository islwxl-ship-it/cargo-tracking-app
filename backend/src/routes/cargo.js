const express = require('express');
const router = express.Router();

// Simulated database for cargo items
let cargoItems = [];

// Create a new cargo item
router.post('/', (req, res) => {
    const newCargo = req.body;
    newCargo.id = cargoItems.length + 1;
    newCargo.history = [];
    cargoItems.push(newCargo);
    res.status(201).json(newCargo);
});

// Read all cargo items
router.get('/', (req, res) => {
    res.json(cargoItems);
});

// Read a specific cargo item by ID
router.get('/:id', (req, res) => {
    const cargo = cargoItems.find(c => c.id === parseInt(req.params.id));
    if (!cargo) return res.status(404).send('Cargo not found');
    res.json(cargo);
});

// Update a cargo item including status updates
router.put('/:id', (req, res) => {
    const cargo = cargoItems.find(c => c.id === parseInt(req.params.id));
    if (!cargo) return res.status(404).send('Cargo not found');
    const statusUpdate = { 
        status: req.body.status,
        timestamp: new Date().toISOString(),
    };
    cargo.history.push(statusUpdate);
    Object.assign(cargo, req.body);
    res.json(cargo);
});

// Delete a cargo item
router.delete('/:id', (req, res) => {
    const cargoIndex = cargoItems.findIndex(c => c.id === parseInt(req.params.id));
    if (cargoIndex === -1) return res.status(404).send('Cargo not found');
    cargoItems.splice(cargoIndex, 1);
    res.status(204).send();
});

module.exports = router;