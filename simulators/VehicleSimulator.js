/*
generateRandomPosition: Generates random latitude and longitude.
start: Starts the vehicle simulation, updating vehicle positions or marking them as immobile and emitting relevant events
 */
import EventEmitter from 'events';

class VehicleSimulator extends EventEmitter {
    constructor() {
        super();
        this.vehicles = {};
        this.immobilityThreshold = 10000; // 10 seconds in milliseconds
        this.checkInterval = 2000; // 2 seconds
        this.immobilityProbability = 0.1; // 10% probability to stay immobile each cycle
    }

    generateRandomPosition() {
        const lat = Math.random() * 180 - 90;
        const lon = Math.random() * 360 - 180;
        return { lat, lon };
    }

    start() {
        setInterval(() => {
            const vehicleId = 'vehicle-' + Math.floor(Math.random() * 10);
            const currentVehicle = this.vehicles[vehicleId] || {
                position: this.generateRandomPosition(),
                timestamp: Date.now(),
                immobile: false
            };

            if (Math.random() < this.immobilityProbability) {
                currentVehicle.immobile = true;
            } else {
                currentVehicle.position = this.generateRandomPosition();
                currentVehicle.immobile = false;
            }

            const timestamp = Date.now();

            if (currentVehicle.immobile) {
                if (timestamp - currentVehicle.timestamp > this.immobilityThreshold) {
                    this.emit('alert', {
                        vehicleId,
                        message: `Vehicle ${vehicleId} is immobile for too long!`
                    });
                }
            } else {
                currentVehicle.timestamp = timestamp;
            }

            this.vehicles[vehicleId] = currentVehicle;
            this.emit('position', {
                vehicleId,
                position: currentVehicle.position,
                timestamp
            });
        }, this.checkInterval);
    }
}

export default VehicleSimulator;

