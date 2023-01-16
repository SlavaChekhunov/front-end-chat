import "../Styles/Chat.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/Search";
import { IconButton, Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { auth} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function Chat({ socket, room }) {
   const [user] = useAuthState(auth);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: user.displayName,
        message: currentMessage,
        time: Date.now(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });

    return () => socket.off("receive_message");
  }, [socket]);

  useEffect(() => {
    // Last 100 messages sent in the chat room (fetched from the db in backend)
    socket.on("last_100_messages", (last100Messages) => {
      last100Messages = JSON.parse(last100Messages);
      setMessageList((list) => [...last100Messages, ...list]);
    });

    return () => socket.off("last_100_messages");
  }, [socket]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };


  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>{room} room</h3>
          <p>Last active {new Date().toLocaleString()}</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={
                  user.displayName === messageContent.author ? "you" : "other"
                }
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{formatDate(messageContent.time)}</p>
                    <p id="author">{messageContent.author || "Guest User"}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
