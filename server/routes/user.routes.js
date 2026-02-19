import { Router } from "express";
import {body } from 'express-validator'
import {authMiddleware} from "../middleware/auth.middleware.js";
import { getUserProfile, login, logOut, registerUser } from "../controllers/user.controller.js";

const userRoute = Router()

userRoute.post('/signin',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.lastName').optional().isLength({min:1}).withMessage('Last name must be provided'),
    body('password').isLength({min:6}).withMessage('Password at least 6 characters long'),
],registerUser)

userRoute.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password at least 6 characters long'),
] , login)

userRoute.get('/profile',authMiddleware,getUserProfile)
userRoute.post('/logout',authMiddleware,logOut)

export default userRoute