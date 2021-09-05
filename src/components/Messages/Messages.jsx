import { ChatItem } from "./ChatItem/ChatItem";
import React from "react";
import { ChatRoom } from "./ChatRoom/ChatRoom";
import style from "./Messages.module.css";
import { Action } from "../../redux/state";

export const Messages = (props) => {
  let ChatRoomElements = props.messagePage.chatInfo.map((room) => (
    <ChatRoom name={room.name} id={room.id} />
  ));
  let ChatItemElements = props.messagePage.messages.map((message) => (
    <ChatItem message={message.text} />
  ));

  let message = React.createRef();

  const updateMessages = () => {
    let action = new Action("UPDATE-MESSAGE", null, message.current.value);
    props.dispatch(action);
  };

  const addMessage = () => {
    let action = new Action("ADD-MESSAGE", null, message.current.value);
    props.dispatch(action);
  };

  return (
    <div className={style.box}>
      <div className={style.chatRooms}>{ChatRoomElements}</div>
      <div className={style.chatRoomBox}>
        <div className={style.chat}>{ChatItemElements}</div>
        <div className={style.form}>
          <input
            className={style.input}
            ref={message}
            value={props.messagePage.newMessage}
            onChange={updateMessages}
            placeholder={"write you message"}
            type="text"
          />
          <button className={style.btn_send} onClick={addMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
