import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: process.env.PORT || 3000,
    node_env: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGO_URI,
    clerk: {
        publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
        secretKey: process.env.CLERK_SECRET_KEY,
    },
    arcjet: {
        env: process.env.ARCJET_ENV,
        key: process.env.ARCJET_KEY,
    },
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
};