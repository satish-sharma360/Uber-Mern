import userModel from "../models/user.model.js"

const createUser = async ({firstName , lastName ,email ,password}) =>{
    try {
        if (!firstName || !email || !password) {
            const err = new Error('All fields are required')
            err.statusCode = 400
            throw err
        }
        // if User already exist

        let existing = await userModel.findOne({email})

        if(existing){
            const err = new Error('A user with that email already exists')
            err.statusCode = 409
            throw err
        }

        // create the user document and save it
        const newUser = await userModel.create({
            // schema expects `fullname` all lowercase
            fullname: {
                firstName,
                lastName
            },
            email,
            password
        })
        return newUser
    } catch (error) {
        // ensure every error carries a statusCode for controller
        if (!error.statusCode) error.statusCode = 500
        throw error
    }
}

export {createUser}