require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
});

pool.connect()
    .then(() => {
        console.log("✅ PostgreSQL connected successfully");
    })
    .catch((error) => {
        console.error("❌ Error connecting to PostgreSQL");
        console.error(error.message);
    });

module.exports = pool;