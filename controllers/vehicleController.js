/*
import Vehicle from '../models/Vehicle.js';

// Function to add a new vehicle
export const addVehicle = async (req, res) => {
    const { vehicleId, lat, lon } = req.body;
    try {
        // Check if vehicle already exists
        let vehicle = await Vehicle.findOne({ vehicleId });
        if (vehicle) {
            return res.status(400).json({ msg: 'Vehicle already exists' });
        }

        // Create a new vehicle
        vehicle = new Vehicle({
            vehicleId,
            position: { lat, lon }
        });

        await vehicle.save();
        res.status(201).json({ msg: 'Vehicle added', vehicle });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Function to update vehicle position
export const updatePosition = async (req, res) => {
    const { vehicleId, lat, lon } = req.body;
    try {
        // Find vehicle by ID
        let vehicle = await Vehicle.findOne({ vehicleId });
        if (!vehicle) {
            return res.status(404).json({ msg: 'Vehicle not found' });
        }

        // Update vehicle position
        vehicle.position = { lat, lon };
        vehicle.timestamp = Date.now();

        await vehicle.save();
        res.status(200).json({ msg: 'Vehicle position updated', vehicle });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Function to get the position of a specific vehicle
export const getPosition = async (req, res) => {
    const { vehicleId } = req.params;
    try {
        // Find vehicle by ID
        let vehicle = await Vehicle.findOne({ vehicleId });
        if (!vehicle) {
            return res.status(404).json({ msg: 'Vehicle not found' });
        }

        res.status(200).json(vehicle.position);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Function to get the positions of all vehicles
export const getAllPositions = async (req, res) => {
    try {
        // Find all vehicles
        const vehicles = await Vehicle.find();

        // Extract positions
        const positions = vehicles.map(vehicle => ({
            vehicleId: vehicle.vehicleId,
            position: vehicle.position
        }));

        res.status(200).json(positions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
*/