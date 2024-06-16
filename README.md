# Vehicle Tracking System

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ninjajawad/vehicle-tracking.git
   cd vehicle-tracking
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```
   MONGO_URI=mongodb://"your mongose"/vehicle-tracking
   JWT_SECRET=bfd7e608bcdbd65197a25dcbc0ddf74580a721e777dc30181cfc59e6c6a94b5de7f33b4d922d25eb36d1a5b5b26e9567426206b7477432ad5be6cac98013cf73
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register**
- **POST /api/auth/login**
- **POST /api/auth/logout**

### WebSocket Events

- **position**: Receives real-time vehicle position data
- **alert**: Receives alerts when a vehicle is immobile for too long
