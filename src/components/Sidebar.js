import React from "react";
import "../Styles/Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import SearchOutlinedIcon from "@mui/icons-material/Search";
import { IconButton, Avatar, Button } from "@mui/material";
import SidebarChat from "./SidebarChat";
import { auth } from "../firebase";
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Sidebar({socket, room, time, username}) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
    navigate('/')
  }

  const leaveRoom = () => {
    const time = Date.now();
    socket.emit("leave_room", { username, room, time });
    navigate("/dropdown", );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL || ''}  />
        <div className="sidebar_headerRight">
          <IconButton>
            <DataUsageIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search for a user" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
      <Button onClick={signUserOut}>Log Out</Button>
      <Button onClick={leaveRoom}>Leave Room</Button>
      </div>
    </div>
  );
}

export default Sidebar;
