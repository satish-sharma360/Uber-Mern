import mongoose from "mongoose";

const connectToDb = async () =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected ✅`)
    } catch (error) {
        console.log('Connection Fail',error.message)
        process.exit(1)
    }
}
export default connectToDb