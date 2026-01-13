require('dotenv').config();

module.exports = {
    // Database
    mongoURI: process.env.MONGO_URI,

    // JWT
    jwtSecret: process.env.JWT_SECRET || 'secret',
    JWT_SECRET: process.env.JWT_SECRET || 'secret', // For User.js compatibility
    JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',

    // Email Configuration
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    FROM_NAME: process.env.FROM_NAME || 'Lost and Found',
    FROM_EMAIL: process.env.FROM_EMAIL,

    // Guard Credentials (for User.js legacy check)
    GUARD_CREDENTIALS: {
        username: process.env.GUARD_USERNAME || 'pict_guard',
        password: process.env.GUARD_PASSWORD || 'secure@guard123'
    }
};
