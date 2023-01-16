import { Button } from '@mui/material';
import React from 'react'
import '../Styles/Dropdown.css'
import { useNavigate } from "react-router-dom";

function Dropdown({ room, setRoom, socket }) {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }

    navigate('/main', {replace: true});
  };

  return (
    <div className="joinChatContainer">
      <h3>Whatsapp Rooms</h3>

      <select className="input" onChange={(e) => setRoom(e.target.value)}>
        <option>-- Select Room --</option>
        <option value="General">General</option>
        <option value="Developers">Developers</option>
        <option value="Cat Lovers">Cat Lovers</option>
        <option value="Dog Lovers">Dog Lovers</option>
      </select>

      <Button onClick={joinRoom}>Join Room</Button>
    </div>
  );
}

export default Dropdown