import { useState, useEffect } from "react";

function Rooms() {
  const [rooms, setRooms] = useState([]);   // store data from DB
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling

  useEffect(() => {
    // Fetch data when component mounts
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rooms"); // your backend API
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setRooms(data); // save data in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []); // [] = run only once on mount

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} - ${room.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
