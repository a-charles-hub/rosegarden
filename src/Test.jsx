import { useEffect, useState } from "react";

function FetchRooms({ id }) {
    const [room, fetchRoom] = useState(null); // start value is null

    useEffect(() => {
        fetch(`http://localhost:3000/rooms/${ id }`)
            .then(res => res.json())
            .then(data => fetchRoom(data));
    }, [id])

    return (
        <div>
            <div>{ room ? room.price : "Loading..." }</div>
        </div>    
    );
}

export default FetchRooms;