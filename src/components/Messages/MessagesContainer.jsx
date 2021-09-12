import React from "react";
import { actionCreator } from "../../redux/store-redux";
import { Messages } from "./Messages";

export const MessagesContainer = (props) => {
  let message = React.createRef();

  const updateMessages = () => {
    let action = actionCreator("UPDATE-MESSAGE", null, message.current.value);
    props.dispatch(action);
  };

  const addMessage = () => {
    let action = actionCreator("ADD-MESSAGE", null, message.current.value);
    props.dispatch(action);
  };

  return (
    <Messages
      addMessage={addMessage}
      updateMessages={updateMessages}
      message={message}
      chatInfo={props.messagePage.chatInfo}
      messages={props.messagePage.messages}
      newMessage={props.messagePage.newMessage}
    />
  );
};
