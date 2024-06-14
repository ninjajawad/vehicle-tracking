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