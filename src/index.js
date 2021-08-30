import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import state, { addPost, updatePost, rerending } from "./redux/state";

export const rerenderUserInterface = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePost={updatePost} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderUserInterface(state);
rerending(rerenderUserInterface);
