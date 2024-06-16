import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import authRoutes from './routes/auth.js';
import VehicleSimulator from './simulators/VehicleSimulator.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

connectDB();

app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

app.use('/api/auth', authRoutes);

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const vehicleSimulator = new VehicleSimulator();
vehicleSimulator.on('position', (data) => {
    io.emit('position', data);
});
vehicleSimulator.on('alert', (data) => {
    io.emit('alert', data);
});
vehicleSimulator.start();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

