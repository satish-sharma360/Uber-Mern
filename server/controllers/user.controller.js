import { validationResult } from "express-validator"
import userModel from "../models/user.model.js"
import { createUser } from "../services/user.service.js"
import blackListTokenModel from "../models/blackListToken.model.js"

const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body

        // hash the password before creating the user
        const hashPassword = await userModel.hashPassword(password)

        const user = await createUser({
            firstName: fullname.firstName,
            lastName: fullname.lastName,
            email,
            password: hashPassword
        })

        const token = await user.generateAuthToken()

        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: { user, token }
        })
    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

const login = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email }).select('+password')

        if (!user) {
            return res.status(404).json({ message: "Invalid email or password" })
        }

        const isMatch = await user.comparePassword(password, user.password)

        if (!isMatch) {
            return res.status(404).json({ message: "Invalid email or password" })
        }

        const token = user.generateAuthToken()

        res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000 })

        res.status(201).json({ message: "Login Successfully", user, token })

    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
    //"email":"rahul@gmail.com",
    //"password":"rahulpassword"
}

const getUserProfile = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ message: "User Fetched Successfully", user })
    } catch (error) {
        const code = error.statusCode || 400
        res.status(code).json({
            status: 'error',
            message: error.message || 'Something went wrong'
        })
    }
}

const logOut = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1]
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
export { registerUser, login, getUserProfile, logOut }