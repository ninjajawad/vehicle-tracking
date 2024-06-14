// utils/db.js
/*
 This script sets up the MongoDB connection using Mongoose.
 It uses the URI from environment variables and prints a success message upon connection.
 If it fails, an error message is logged, and the process exits.
*/
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;


