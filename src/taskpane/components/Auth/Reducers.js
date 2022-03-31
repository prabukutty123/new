import React from "react";
import { LOGIN, LOGOUT } from "./Types";
const Reducers = (state = "initial", action) => {
  switch (action.type) {
    case LOGIN:
      return (state = true);
    case LOGOUT:
      return (state = false);
    default:
      return state;
  }
};
export default Reducers;
