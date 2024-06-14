/*
Middleware to check if a valid JWT token is present in the request headers.
If valid, it decodes the token and attaches the user ID to the request object.
 */
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

