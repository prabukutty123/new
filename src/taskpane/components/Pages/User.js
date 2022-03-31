import React from "react";
import { Link } from "react-router-dom";

const li = {
  display: "inline",
  liststyletype: "none",
  padding: " 20px",
  listStyleType: "none",
  color: "#FFFFFF",
};
const User = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <ul style={{ backgroundColor: "#DC143C" }}>
        <h1 style={{ backgroundColor: "#DC143C", textAlign: "center" }}>User is using</h1>
        <li style={li}>
          <Link to="/Pages">Pages</Link>
        </li>
        <li style={li}>
          <Link to="/About">About</Link>
        </li>
        <li style={li}>
          <Link to="/Movies">Movies</Link>
        </li>
        <li style={li}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
      <div style={{ width: "30%", paddingTop: "20px", height: "100vh", backgroundColor: " #ff6347" }}>
        <h1 style={{ color: "#FFFFFF" }}>user</h1>
        <ul>
          <li>
            <Link to="/Movies">
              <h2>Login to Visit Contacts</h2>
            </Link>
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
