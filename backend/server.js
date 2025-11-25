const express = require('express'); // Import express
const cors = require('cors'); // Import cors for handling cross-origin requests
const app = express(); // Create an express application
const PORT = 3000; // Define the port number
app.use(cors()); // Enable CORS for all routes

const rooms = require('./routes/room'); // Import rooms routes

// Routes
app.use('/rooms', rooms); // Use rooms routes for /rooms endpoint
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
