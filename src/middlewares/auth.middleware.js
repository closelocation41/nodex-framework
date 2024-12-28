const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { AUTH } = require("../config/app.config")
const { ERROR } = require("../config/error.config")
const userHelper = require("../helpers/user.helper")

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
    try {
        const decoded = jwt.verify(token, AUTH.KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
    }
};

const createToken = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userHelper.getUserDetails({ username });
        if (!user) {
            return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
        }
        const token = jwt.sign({ userId: user._id }, AUTH.KEY, {
            expiresIn: AUTH.TIMEOUT,
        });
        res.status(200).json({ token });
    } catch (error) {
        return res.status(ERROR.AUTH.errorCode).json(ERROR.AUTH);
    }
};

module.exports = { verifyToken, createToken };
