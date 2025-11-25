const Rooms = require('../models/Rooms');

class RoomsController {
  static async getAllRooms(req, res) {
    try {
        const rooms = await Rooms.getAllRooms();

        if (rooms.length === 0) {
                return res.status(404).json({ message: "No rooms found" });
        }

        res.json(rooms);
    } catch (error) {
        console.error("Error retrieving rooms:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  }

    static async getRoomById(req, res) {
        const roomId = req.params.id;

        try {
        const room = await Rooms.getRoomsById(roomId);
            if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
            res.json(room);
        } catch (error) {
            console.error("Error retrieving room by ID:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }  
}

module.exports = RoomsController;
