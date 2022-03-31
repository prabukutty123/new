import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import PostReducers from "./components/Auth/Post/PostReducers";
import Reducers from "./components/Auth/Reducers";
const store = createStore(combineReducers({auth:  Reducers,post:  PostReducers}), applyMiddleware(thunk));
export default store;
