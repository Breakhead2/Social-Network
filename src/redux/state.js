import { profileReducer } from "./profileReducer";
import { messageReducer } from "./messageReducer";
import { sidebarReducer } from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
        { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
      ],
      newPostText: "",
    },
    messagePage: {
      newMessage: "",
      chatInfo: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Nickolay" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Anna" },
      ],
      messages: [
        { id: 1, text: "Hi!" },
        { id: 2, text: "How are you?" },
      ],
    },
    sideBar: {
      friends: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Nickolay" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Anna" },
      ],
    },
  },
  _callsSubscriber() {
    console.log("Object state changed");
  },

  get State() {
    return this._state;
  },
  subscribe(observer) {
    this._callsSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(action, this._state.profilePage);
    this._state.messagePage = messageReducer(action, this._state.messagePage);
    this._state.sideBar = sidebarReducer(action, this._state.sideBar);

    this._callsSubscriber(this._state);
  },
};

export function actionCreator(type, ...rest) {
  let [id, message] = rest;

  return {
    type: type,
    id: id,
    message: message,
  };
}

export default store;
