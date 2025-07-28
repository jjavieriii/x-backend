import mongoose from 'mongoose';
import { env } from './env.config.js';

export const dbConfig = async () => {

    const dbOptions = {
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        connectTimeoutMS: 10000, // Timeout for initial connection
        };

    try {
        await mongoose.connect(env.mongoUri, dbOptions);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }

}