// Import database connection
const pool = require('../config/db');

class Rooms {
        constructor(id, title, description, price_per_night, availability, room_number, capacity, room_type, amenities = [], images = []) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price_per_night = price_per_night;
        this.availability = availability;
        this.room_number = room_number;
        this.capacity = capacity;
        this.room_type = room_type;
        this.amenities = amenities;
        this.images = images;
    }

    // Fetch all rooms from the database
    static async getAllRooms() {
        try {
            const [rows] = await pool.query(`
                SELECT r.*,
                    GROUP_CONCAT(DISTINCT a.name) AS amenities,
                    GROUP_CONCAT(DISTINCT i.image_url) AS images
                FROM rooms r
                LEFT JOIN amenities a ON r.id = a.room_id
                LEFT JOIN room_images i ON r.id = i.room_id
                GROUP BY r.id;
            `);

            return rows.map(row => new Rooms(
                row.id,
                row.title,
                row.description,
                row.price_per_night,
                row.availability,
                row.room_number,
                row.capacity,
                row.room_type,
                row.amenities ? row.amenities.split(',') : [],
                row.images ? row.images.split(',') : []
            ));
        } catch (error) {
            console.error("Error fetching rooms from database:", error);
            throw error;
        }
    }

    // Fetch a room by its ID 
    static async getRoomsById(id) {
        try {
            const [rows] = await pool.query(`
                SELECT r.*,
                    GROUP_CONCAT(DISTINCT a.name) AS amenities,
                    GROUP_CONCAT(DISTINCT i.image_url) AS images
                FROM rooms r
                LEFT JOIN amenities a ON r.id = a.room_id
                LEFT JOIN room_images i ON r.id = i.room_id
                WHERE r.id = ?
                GROUP BY r.id;
            `, [id]);

            if (rows.length === 0) {
                return null; // No room found with the given ID
            }

            const row = rows[0];
            
            return new Rooms(
                row.id,
                row.title,
                row.description,
                row.price_per_night,
                row.availability,
                row.room_number,
                row.capacity,
                row.room_type,
                row.amenities ? row.amenities.split(',') : [],
                row.images ? row.images.split(',') : []
            );

        } catch (error) {
            console.error("Error fetching room by ID from database:", error);
            throw error;
        }
    }

    // Check room availability
}

module.exports = Rooms;