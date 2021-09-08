import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { messageReducer } from "./messageReducer";
import { sidebarReducer } from "./sidebarReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  sideBar: sidebarReducer,
});

let store = createStore(reducers);

export function actionCreator(type, ...rest) {
  let [id, message] = rest;

  return {
    type: type,
    id: id,
    message: message,
  };
}

export default store;
