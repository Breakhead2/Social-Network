import { ChatItem } from "./ChatItem/ChatItem";
import React from "react";
import { ChatRoom } from "./ChatRoom/ChatRoom";
import style from "./Messages.module.css";

export const Messages = (props) => {
  let ChatRoomElements = props.chatInfo.map((room) => (
    <ChatRoom name={room.name} id={room.id} />
  ));
  let ChatItemElements = props.messages.map((message) => (
    <ChatItem message={message.text} />
  ));

  let newMessage = React.createRef();

  const onUpdateMessages = () => {
    let text = newMessage.current.value;
    props.updateMessages(text);
  };

  const onAddMessage = () => {
    props.addMessage();
  };

  return (
    <div className={style.box}>
      <div className={style.chatRooms}>{ChatRoomElements}</div>
      <div className={style.chatRoomBox}>
        <div className={style.chat}>{ChatItemElements}</div>
        <div className={style.form}>
          <input
            className={style.input}
            ref={newMessage}
            value={props.newMessage}
            onChange={onUpdateMessages}
            placeholder={"write you message"}
            type="text"
          />
          <button className={style.btn_send} onClick={onAddMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
