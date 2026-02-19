import { validationResult } from "express-validator"
import captainModel from "../models/captain.model.js";
import createCapain from "../services/captain.service.js";
import blackListTokenModel from "../models/blackListToken.model.js";

const registerCaptain = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, password, vehicle } = req.body;

        const existingCaptain = await captainModel.findOne({ email })

        if (existingCaptain) {
            throw new Error('Captain Already Registered')
        }

        // hash Password
        const hashPassword = await captainModel.hashPassword(password)

        const captain = await createCapain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        })

        const token = captain.generateAuthToken()

        res.status(201).json({ token, captain });

    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

const logincaptain = async (req, res) => {
    try {
        const { email, password } = req.body;

        const captain = await captainModel.findOne({ email }).select('+password')

        if (!captain) {
            throw new Error('Invalid email or Password')
        }

        const ismatch = await captain.comparePassword(password, captain.password)

        if (!ismatch) {
            throw new Error('Invalid email or Password')
        }

        const token = await captain.generateAuthToken()

        res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000 })

        res.status(200).json({ token, captain });

    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

const getCaptainProfile = async (req, res) => {
    try {
        const captain = req.captain;

        res.status(200).json({ message: "User Fetched Successfully", captain })
    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

const captainLogOut = async (req, res) => {
    try {
        const token = req.cookie || req.headers.authorization.split(' ')[1]
        res.clearCookie('token');

        await blackListTokenModel.create({ token })

        res.status(200).json({ message: `Logout Successsfully` })

    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}
export { registerCaptain, logincaptain, getCaptainProfile ,captainLogOut}