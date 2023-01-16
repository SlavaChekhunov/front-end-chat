import "../Styles/App.css";
import Sidebar from "./Sidebar";
import Dropdown from "./Dropdown";
import Chat from "./Chat";
import { useState } from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [user, setUser] = useState(localStorage.getItem("setUser"));
  const [room, setRoom] = useState("");

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              room={room}
              setRoom={setRoom}
              socket={socket}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/dropdown"
          element={
            <Dropdown
              room={room}
              setRoom={setRoom}
              socket={socket}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/main"
          element={[
            <div className="app_main">
              <Sidebar room={room} socket={socket} user={user} />
              <Chat room={room} socket={socket} user={user} />,
            </div>,
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;
