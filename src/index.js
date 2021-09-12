import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store-redux";
import { Provider } from "react-redux";

export const rerenderUI = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderUI(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderUI(state);
});
