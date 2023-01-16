import { Avatar } from "@mui/material";
import React from "react";
import "../Styles/SidebarChat.css";

function SidebarChat() {

  return (
    <>
      <div className="sidebarChat">
        <Avatar
          src={
            "https://d16kd6gzalkogb.cloudfront.net/__sized__/magazine_images/Jaebum-Joo-thumbnail_webp-9999x9999.webp"
          }
        />
        <div className="sidebarChat_container">
          <h2>Van Gogh</h2>
          <p>Hey</p>
        </div>
      </div>
      <div className="sidebarChat">
        <Avatar
          src={
            "https://cdn.pixabay.com/photo/2021/03/02/17/26/pixel-6063246_960_720.png"
          }
        />
        <div className="sidebarChat_container">
          <h2>Guest User</h2>
          <p>Hello</p>
        </div>
      </div>
      <div className="sidebarChat">
        <Avatar
          src={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76fd129f-bdfc-4519-89fe-87580d7ffd49/dezo2aa-db7b4afa-c3f8-4e8a-a5bc-405bae2b9e24.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2ZmQxMjlmLWJkZmMtNDUxOS04OWZlLTg3NTgwZDdmZmQ0OVwvZGV6bzJhYS1kYjdiNGFmYS1jM2Y4LTRlOGEtYTViYy00MDViYWUyYjllMjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ivshZOV9AJDVasTMBNSyvHY4Xs_lYCtZPppeYL8jE8o"
          }
        />
        <div className="sidebarChat_container">
          <h2>Mario</h2>
          <p>It's a me, Mario.</p>
        </div>
      </div>
    </>
  );
}

export default SidebarChat;
