import { ChatItem } from "./ChatItem/ChatItem";
import React from "react";
import { ChatRoom } from "./ChatRoom/ChatRoom";
import style from "./Messages.module.css";

export const Messages = (props) => {
  let ChatRoomElements = props.messagePage.chatInfo.map((room) => (
    <ChatRoom name={room.name} id={room.id} />
  ));
  let ChatItemElements = props.messagePage.messages.map((message) => (
    <ChatItem message={message.text} />
  ));

  let message = React.createRef();

  const addMessage = () => {
    alert(message.current.value);
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
            type="text"
            placeholder="Send message"
          />
          <button className={style.btn_send} onClick={addMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
