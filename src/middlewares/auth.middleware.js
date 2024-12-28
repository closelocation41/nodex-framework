const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { AUTH } = require("../config/app.config")
const { ERROR } = require("../config/error.config")
const userHelper = require("../helpers/user.helper")


const verifyToken = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Check if token is provided
    if (!token) {
        return res.status(ERROR.AUTH.errorCode).json({
            message: 'No token provided',
            ...ERROR.AUTH
        });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, AUTH.KEY);

        // Attach the userId to the request object (for further use in other routes)
        req.userId = decoded.userId;
        next(); // Continue to the next middleware/route handler
    } catch (error) {
        // Token verification failed (either invalid or expired token)
        return res.status(ERROR.AUTH.errorCode).json({
            message: 'Invalid or expired token',
            ...ERROR.AUTH
        });
    }
};


const createToken = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Get user details (assuming it's returning an array)
        const users = await userHelper.getUserDetails({ username });

        // Ensure we have a valid user object
        if (!users || users.length === 0) {
            return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
        }

        const user = users[0]; // Assuming you need the first user in the array

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
        }

        // Generate token
        const token = jwt.sign({ userId: user._id }, AUTH.KEY, {
            expiresIn: AUTH.TIMEOUT,
        });

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
    }
};


module.exports = { verifyToken, createToken };
