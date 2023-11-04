import dotenv from 'dotenv';

dotenv.config();

let config = {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.DB_PORT,
    token: process.env.TOKEN_SECRET
}

export default config;