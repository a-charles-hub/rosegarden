const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/roomsController');

// This is correct because server.js adds "/rooms"
router.get('/', RoomsController.getAllRooms);
router.get('/:id', RoomsController.getRoomById);

module.exports = router;
