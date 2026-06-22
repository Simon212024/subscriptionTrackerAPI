import mongoose from "mongoose";
import {DATABASE_URI, NODE_ENV} from "../config/env.js"

if(!DATABASE_URI){
    throw new Error('Please the Database URI in the env<development/production>.local file')
}


const connectToDb = async()=>{
    console.log('Attempting connection with URI:', DATABASE_URI);
    try {
        await mongoose.connect(DATABASE_URI);
        console.log(`Connected to Database successfully in ${NODE_ENV} mode`);
        
    } catch (error) {
        console.error('Error connecting to Database',error);

        process.exit(1)
        
    }
}
    
export default connectToDb;