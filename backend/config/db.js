const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.AWS_RS_ENDPOINT,
    user: process.env.AWS_RDS_USERNAME,
    password: process.env.AWS_RDS_PASSWORD,
    database: process.env.AWS_RDS_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log('Database connection pool created.');

module.exports = pool;  // export the pool directly
