// backend/test-db.js
const pool = require('./config/db');

async function testDB() {
    try {
        // Simple query to check connection
        const [rows] = await pool.query('SELECT NOW() AS currentTime');
        console.log('✅ DB Connection Successful:', rows);
        process.exit(0);
    } catch (err) {
        console.error('❌ DB Connection Failed:', err.message);
        process.exit(1);
    }
}

testDB();
