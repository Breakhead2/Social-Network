import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

//Данные

let posts = [
  { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
  { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
];

let chatInfo = [
  { id: 1, name: "Dmitriy" },
  { id: 2, name: "Nickolay" },
  { id: 3, name: "Ivan" },
  { id: 4, name: "Denis" },
  { id: 5, name: "Annay" },
];

let messages = [
  { id: 1, text: "Hi!" },
  { id: 2, text: "How are you?" },
];

//Верстка

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} chatInfo={chatInfo} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
