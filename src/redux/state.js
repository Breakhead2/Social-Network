import { rerenderUserInterface } from "../rerender";

let state = {
  profilePage: {
    posts: [
      { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
      { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
    ],
    newPostText: "Some text",
  },
  messagePage: {
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
};

export function addPost(message) {
  let newObj = {
    id: state.profilePage.posts.length + 1,
    text: message,
    likesCount: 0,
  };

  state.profilePage.posts.push(newObj);
  rerenderUserInterface(state);
  state.profilePage.newPostText = "";
  console.log(state);
}

export function updatePost(message) {
  state.profilePage.newPostText = message;
  rerenderUserInterface(state);
  console.log(state);
}

export default state;
