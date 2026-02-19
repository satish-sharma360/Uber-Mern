import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";
import app from "../app.js";
import blackListTokenModel from "../models/blackListToken.model.js";
import captainModel from "../models/captain.model.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new Error('Unauthorize User')
        }
        const isBlackListed = await blackListTokenModel.findOne({ token: token })

        if (isBlackListed) {
            throw new Error('Unauthorize User')
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded._id)

        req.user = user

        next()
    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

const authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

        if (!token) {
            throw new Error('Unauthorize Captain')
        }

        const isBlackListed = await blackListTokenModel.findOne({ token: token })

        if (isBlackListed) {
            throw new Error('Unauthorize User')
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        const captain = await captainModel.findById(decoded._id)

        req.captain = captain

        next()
    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

export {authMiddleware, authCaptain} ;