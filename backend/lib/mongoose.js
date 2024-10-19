import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    console.log('mongodb url: ', process.env.MONGODB_URL);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if (isConnected) {
        console.log('using existing connection');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log('connected to db');
    } catch (error){
        console.log('error connecting to db', error);
    }
}