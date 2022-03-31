// import React from "react";
// import axios from "axios";
// import { FETCH_USER} from "./Types";

// export const fetchUsers = () => {

//   return (dispatch) => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         // console.log(response);
//         const users = response.data;
//         // console.log(users);
//         dispatch({ type: FETCH_USER, payload: users });
//         localStorage.setItem("users", JSON.stringify(users));
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
// };
// console.log(users);
// const PostReducers = (state = false, action) => {
//   switch (action.type) {
//     case FETCH_USER:
//       return (state = action.payload);
//     default:
//       return state;
//   }
// };

// export default PostReducers;
