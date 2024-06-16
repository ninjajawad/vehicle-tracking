/*
Define a Vehicle schema with fields for vehicleId, position (latitude and longitude), timestamp, and immobile status. vehicleId must be unique.
 */

import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
    vehicleId: { type: String, required: true, unique: true },
    position: {
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    },
    timestamp: { type: Date, default: Date.now },
    immobile: { type: Boolean, default: false }
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);
export default Vehicle;
