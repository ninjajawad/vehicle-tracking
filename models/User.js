import mongoose from 'mongoose';

/*
Define a User schema with username and password fields. Both are required, and username must be unique.
*/

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);
export default User;
