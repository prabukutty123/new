import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const li = {
  display: "inline",
  liststyletype: "none",
  padding: " 20px",
  listStyleType: "none",
  color: "#FFFFFF",
};
const SuperAdmin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/Login");
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <ul style={{ backgroundColor: "#DC143C" }}>
        <h1 style={{ backgroundColor: "#DC143C", textAlign: "center" }}>SuperAdmin is using</h1>
        <li style={li}>
          {" "}
          <Link to="/Pages">Pages</Link>
        </li>
        <li style={li}>
          <Link to="/User">User</Link>
        </li>
        <li style={li}>
          <Link to="/Admin">Admin</Link>
        </li>
        <li style={li}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
      <div style={{ width: "30%", paddingTop: "20px", height: "100vh", backgroundColor: " #ff6347" }}>
        <h1 style={{ color: "#FFFFFF" }}>SuperAdmin</h1>
        <ul>
          <li>
            <Link to="/User">
              <h2>User</h2>
            </Link>
            <br />
          </li>
          <li style={{ paddingTop: "10px" }}>
            <Link to="/Admin">
              <h2>Admin</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuperAdmin;
