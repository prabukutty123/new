import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { DELETE_USER } from "../components/FetchData/Types";
import { EDIT_USER } from "../components/FetchData/Types";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../components/FetchData/Reducers";
const UserContainer = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.post);
  function handleSubmit() {
    dispatch(fetchUsers());
    console.log(userData);
  }

  // DELETE_USER

  function deleteItem(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then((results) => {
      results.json().then((resp) => {
        console.log(resp);
      });
    });

    const deleteUser = userData.filter((item) => item.id !== id);
    localStorage.setItem("users", JSON.stringify(deleteUser));
    dispatch({ type: DELETE_USER, payload: deleteUser });
    console.log(deleteUser);
  }

  // EDIT_USER
  function EditUser(id) {
    const EditUser = userData.find((item) => item.id == id);
    EditUser.name = "prabu";
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(EditUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((results) => {
      results.json().then((resp) => {
        console.log(resp);
      });
    });
    
    localStorage.setItem("users", JSON.stringify(userData));
  
    console.log(userData);
    dispatch({ type: EDIT_USER, payload: userData });
  }

  return (
    <div>
      <button onClick={handleSubmit}>Data</button>
      <h2>HEllo</h2>
      {userData && userData
        ? userData.map((user) => (
            <div className="user">
              {user.name} <AiFillEdit onClick={() => EditUser(user.id)} />
              <BsFillTrashFill onClick={() => deleteItem(user.id)} />
            </div>
          ))
        : null}
        <div>      <Pages/></div>
  

<input
        type="text"
        placeholder="Name"
    
      />
      <input type="submit" value="Submit"></input>
    </div>
  );
};

export default UserContainer;
